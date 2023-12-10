---
title: 'Criando uma aplicação de chat em tempo real com JavaScript e Socket.io'
description: 'Este tutorial ensina a criar uma aplicação de chat em tempo real com JavaScript e Socket.io, incluindo exemplos de código e sugestões de funcionalidades. Indicado para desenvolvedores intermediários.'
date: 2023-12-10
cover: node.png
icon: "mdi:calendar-blank"
tags:
  - Javascript
  - Node
---

# Criando uma aplicação de chat em tempo real com JavaScript e Socket.io

[Este tutorial ensina a criar uma aplicação de chat em tempo real com JavaScript e Socket.io, incluindo exemplos de código e sugestões de funcionalidades. Indicado para desenvolvedores intermediários.]{.font-medium.text-xl}


::PostDate{ :icon='icon' :date='date'}
::
![Earth from Space](/images/blog/node.png){.rounded-lg.w-full}

[O Socket.io é uma biblioteca JavaScript que permite a comunicação em tempo real entre cliente e servidor por meio de WebSockets, que são protocolos de comunicação em duas vias.]{.font-medium.text-lg}

[Com o Socket.io, é possível criar aplicações de chat em tempo real de forma fácil e eficiente.]{.font-medium.text-lg}

[Neste artigo, vamos criar uma aplicação de chat em tempo real simples utilizando o Socket.io e o Node.js. Para isso, precisaremos seguir os seguintes passos:]{.font-medium.text-lg}

1. Configurar um servidor Node.js com o Socket.io
2. Criar uma página HTML para o chat
3. Adicionar os scripts do Socket.io na página HTML
4. Implementar a comunicação em tempo real entre cliente e servidor com o Socket.io


# Configurando um servidor Node.js com o Socket.io

[Primeiramente, precisamos criar um servidor Node.js com o Socket.io.]{.font-medium.text-lg}

[Para isso, crie um novo diretório para o projeto e navegue até ele pelo terminal.]{.font-medium.text-lg}

[Em seguida, execute o comando **npm init** para criar um arquivo **package.json**, que armazenará as informações do projeto e suas dependências.]{.font-medium.text-lg}

[Depois disso, instale as dependências do Socket.io e do Express, que é um framework Node.js para a criação de aplicações web.]{.font-medium.text-lg}

[Para isso, execute o comando **npm install socket.io express.**]{.font-medium.text-lg}

[Com as dependências instaladas, crie um arquivo **server.js** e adicione o seguinte código:]{.font-medium.text-lg}

```js
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

[Nesse código, estamos criando uma instância do Express e do Socket.io.]{.font-medium.text-lg}

[Também estamos criando um servidor HTTP com o Express e passando-o para o Socket.io.]{.font-medium.text-lg}

[Por fim, estamos iniciando o servidor na porta 3000.]{.font-medium.text-lg}

# Criando uma página HTML para o chat


[Agora que temos um servidor Node.js com o Socket.io, precisamos criar uma página HTML para o chat.]{.font-medium.text-lg}


[Crie um arquivo **index.html** e adicione o seguinte código:]{.font-medium.text-lg}

```js
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Chat em tempo real</title>
</head>
<body>
  <input type="text" id="username" placeholder="Digite seu nome">
  <br><br>
  <textarea id="message" placeholder="Digite sua mensagem"></textarea>
  <br><br>
  <button id="send">Enviar</button>

  <script src="/socket.io/socket.io.js"></script>
  <script src="client.js"></script>
</body>
</html>
```

[Nesse código, estamos criando um formulário com um campo de texto para o nome do usuário, um campo de texto para a mensagem e um botão para enviar a mensagem.]{.font-medium.text-lg}

[Também estamos adicionando os scripts do Socket.io e do cliente.]{.font-medium.text-lg}

# Adicionando os scripts do Socket.io na página HTML

[Agora precisamos criar o arquivo **client.js** e adicionar o seguinte código:]{.font-medium.text-lg}

```js
const socket = io();

const usernameInput = document.querySelector('#username');
const messageInput = document.querySelector('#message');
const sendButton = document.querySelector('#send');

sendButton.addEventListener('click', () =>
```


[Nesse código, estamos criando uma instância do Socket.io e selecionando os elementos do formulário.]{.font-medium.text-lg}

[Também estamos adicionando um evento de clique no botão de envio de mensagem.]{.font-medium.text-lg}

# Implementando a comunicação em tempo real entre cliente e servidor com o Socket.io

[Agora precisamos implementar a comunicação em tempo real entre o cliente e o servidor com o Socket.io.]{.font-medium.text-lg}

[Para isso, precisamos adicionar o seguinte código no arquivo **server.js:**]{.font-medium.text-lg}


```js
io.on('connection', (socket) => {
  console.log('Usuário conectado');

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });

  socket.on('chat message', (data) => {
    console.log(`Mensagem recebida: ${data}`);
    io.emit('chat message', data);
  });
});
```

[Nesse código, estamos adicionando um evento de conexão no Socket.io que será acionado toda vez que um usuário se conectar.]{.font-medium.text-lg}

[Também estamos adicionando um evento de desconexão, que será acionado quando um usuário se desconectar.]{.font-medium.text-lg}

[Por fim, estamos adicionando um evento **chat message**, que será acionado quando um usuário enviar uma mensagem.]{.font-medium.text-lg}

[Esse evento recebe os dados da mensagem e os emite para todos os usuários conectados com **io.emit.**]{.font-medium.text-lg}

[Com isso, agora precisamos adicionar o seguinte código no arquivo **client.js:**]{.font-medium.text-lg}

```js
sendButton.addEventListener('click', () => {
  const username = usernameInput.value;
  const message = messageInput.value;
  const data = `${username}: ${message}`;

  socket.emit('chat message', data);
  messageInput.value = '';
});
```

[Nesse código, estamos selecionando o valor do campo de texto do nome do usuário e da mensagem.]{.font-medium.text-lg}

[Também estamos criando uma variável **data** que armazena o nome do usuário e a mensagem.]{.font-medium.text-lg}

[Por fim, estamos emitindo o evento **chat message** com os dados da mensagem e limpando o campo de texto da mensagem.]{.font-medium.text-lg}

[Com isso, temos uma aplicação de chat em tempo real utilizando o Socket.io e o Node.js.]{.font-medium.text-lg}

[É possível expandir essa aplicação para adicionar novas funcionalidades, como a exibição de todas as mensagens enviadas e recebidas, ou a adição de emojis.]{.font-medium.text-lg}


# Conclusão

[Neste artigo, aprendemos como criar uma aplicação de chat em tempo real com JavaScript e Socket.io. Utilizamos o Node.js para criar o servidor e o Socket.io para a comunicação em tempo real entre o cliente e o servidor.]{.font-medium.text-lg}

[Com essa aplicação, é possível adicionar mais funcionalidades para melhorar a experiência do usuário, como a exibição de todas as mensagens enviadas e recebidas ou a adição de emojis.]{.font-medium.text-lg}

