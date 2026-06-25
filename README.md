# Projeto Docker Node + SQLite

Este projeto demonstra a construção de um contêiner Node.js com banco de dados SQLite local.  
A ideia é mostrar como os contêineres isolam aplicações e ainda permitem comunicação interna, simulando o conceito de "ilhas conectadas".

---

## 🚀 Estrutura do projeto

``` bash
    projeto-docker-robert/
    │── docker-compose.yml
    │── app/
    │── Dockerfile
    │── index.js
    │── package.json
    │── meu_banco.db (criado automaticamente)
```

- **docker-compose.yml** → define o serviço Node e a rede interna.  
- **Dockerfile** → descreve como construir a imagem Node.  
- **index.js** → servidor Express que conecta ao SQLite.  
- **meu_banco.db** → arquivo do banco criado automaticamente na primeira execução.  

---

## ⚙️ Pré-requisitos

- [Docker Desktop](ca://s?q=Download_Docker_Desktop_Windows) instalado no Windows.  
- Node.js e VSCode (opcional, apenas para editar/testar localmente). 
- Biblioteca sqlite3 (npm install sqlite3)

---

## 🐳 Usando o Docker Desktop

1. Abra o **Docker Desktop** e espere o ícone da baleia azul aparecer na barra de tarefas.  
   Isso significa que o daemon do Docker está rodando.  

2. No terminal (PowerShell ou VSCode), dentro da pasta do projeto, rode:
   ```bash
   docker compose up --build

3. O Docker vai:
    - Construir a imagem Node com base no Dockerfile.
    - Criar o contêiner node_container.
    - Executar o index.js, que inicializa o banco SQLite.

## 🌐 Testando a aplicação
<p>Acesse http://localhost:3000 → lista os usuários cadastrados.</p>
<p>Acesse http://localhost:3000/add → insere o usuário root no banco.</p>

## 📌 Observações
O banco SQLite é criado automaticamente como arquivo meu_banco.db. <br>
A tabela usuarios é inicializada na primeira execução. <br>
O projeto é mínimo, mas demonstra claramente o isolamento e comunicação de serviços em contêineres.

## 🛑 Comandos úteis
* Rodar em segundo plano:
``` bash
    docker compose up -d
```

* Parar e remover os contêineres:
``` bash
    docker compose down
```
## Créditos finais ✅
No final professor, eu preferi fazer com compose mesmo, e usando o docker desktop. Lembra um pouco a forma de gerenciar com o github desktop, da pra gerenciar bem os containers e você tem um feedback "visual". Optei pelo sqlite pela familiaridade mesmo e é isso. 