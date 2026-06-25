const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();

// Cria ou abre o banco local
const db = new sqlite3.Database("./meu_banco.db", (err) => {
  if (err) {
    console.error("Erro ao abrir banco:", err.message);
  } else {
    console.log("Banco SQLite conectado como root!");
  }
});

// Cria tabela se não existir
db.run("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, nome TEXT)");

app.get("/", (req, res) => {
  db.all("SELECT * FROM usuarios", [], (err, rows) => {
    if (err) {
      res.status(500).send("Erro na consulta");
      return;
    }
    res.json(rows);
  });
});

// Endpoint para inserir um usuário "root"
app.get("/add", (req, res) => {
  db.run("INSERT INTO usuarios (nome) VALUES (?)", ["root"], function(err) {
    if (err) {
      res.status(500).send("Erro ao inserir");
      return;
    }
    res.send(`Usuário root inserido com id ${this.lastID}`);
  });
});

app.listen(3000, () => {
  console.log("Servidor Node rodando na porta 3000");
});
