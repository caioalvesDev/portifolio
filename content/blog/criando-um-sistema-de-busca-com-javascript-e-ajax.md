---
title: 'Criando um sistema de busca com JavaScript e Ajax'
description: 'Este artigo ensina como criar um sistema de busca com JavaScript e Ajax, permitindo aos usuários encontrar informações sem atualizar a página. Ele usa eventos de entrada, manipulação do DOM e comunicação com o servidor para implementar a funcionalidade, com exemplos práticos.'
date: 2023-12-09
cover: javascript.png
icon: "mdi:calendar-blank"
tags:
  - Javascript
  - Ajax
---

# Criando um sistema de busca com JavaScript e Ajax

[Este artigo ensina como criar um sistema de busca com JavaScript e Ajax, permitindo aos usuários encontrar informações sem atualizar a página. Ele usa eventos de entrada, manipulação do DOM e comunicação com o servidor para implementar a funcionalidade, com exemplos práticos.]{.font-medium.text-xl}


::PostDate{ :icon='icon' :date='date'}
::
![Earth from Space](/images/blog/javascript.png){.rounded-lg.w-full}

[O uso de Ajax (Asynchronous JavaScript and XML) em conjunto com JavaScript pode fornecer uma experiência mais rápida e responsiva ao usuário em sua aplicação web.]{.font-medium.text-lg}

[Neste artigo, vamos mostrar como criar um sistema de busca com JavaScript e Ajax.]{.font-medium.text-lg}


# Passo 1: Estrutura HTML

```js
<form>
  <input type="text" id="searchInput" placeholder="Digite sua pesquisa">
  <button type="submit" id="searchButton">Pesquisar</button>
</form>

<div id="searchResults"></div>
```


# Passo 2: Escrevendo o JavaScript


[Agora vamos escrever o código JavaScript para lidar com a submissão do formulário e a exibição dos resultados da pesquisa.]{.font-medium.text-lg}

[Usaremos o método **addEventListener()** para detectar o evento de envio do formulário e, em seguida, usaremos o objeto XMLHttpRequest para fazer a solicitação de pesquisa no servidor.]{.font-medium.text-lg}

```js
const form = document.querySelector('form');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const searchResults = document.querySelector('#searchResults');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Obter o valor do campo de entrada
  const query = searchInput.value;
  
  // Enviar a solicitação para o servidor
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/search?q=${query}`, true);
  
  xhr.onload = function() {
    if (this.status === 200) {
      const results = JSON.parse(this.responseText);
      
      // Limpar os resultados anteriores
      searchResults.innerHTML = '';
      
      // Exibir os novos resultados
      results.forEach(function(result) {
        const div = document.createElement('div');
        div.innerHTML = `<h2>${result.title}</h2><p>${result.description}</p>`;
        searchResults.appendChild(div);
      });
    }
  }
  
  xhr.send();
});
```

[No código acima, usamos o método **preventDefault()** para evitar que o formulário seja enviado normalmente e, em vez disso, enviaremos uma solicitação Ajax ao servidor.]{.font-medium.text-lg}


[Usamos o método **open()** do objeto XMLHttpRequest para definir o método de solicitação (GET ou POST) e o URL para a pesquisa.]{.font-medium.text-lg}

[Em seguida, usamos o método **onload** para lidar com a resposta do servidor.]{.font-medium.text-lg}

[Se a resposta tiver um código de status 200 (OK), analisamos os resultados da pesquisa (que foram enviados como JSON) e exibimos os resultados na div **#searchResults.**]{.font-medium.text-lg}

# Passo 3: Criando o servidor

[Para que nosso código JavaScript funcione, precisamos criar um servidor que possa lidar com as solicitações de pesquisa.]{.font-medium.text-lg}

[Vamos usar o Node.js e o pacote Express para criar um servidor simples que retornará resultados de pesquisa aleatórios quando solicitados.]{.font-medium.text-lg}

```js
<form>
  <input type="text" id="searchInput" placeholder="Digite sua pesquisa">
  <button type="submit" id="searchButton">Pesquisar</button>
</form>

<div id="searchResults"></div>
```


# Passo 2: Escrevendo o JavaScript

[Agora vamos escrever o código JavaScript para lidar com a submissão do formulário e a exibição dos resultados da pesquisa.]{.font-medium.text-lg}

[Usaremos o método **addEventListener()** para detectar o evento de envio do formulário e, em seguida, usaremos o objeto XMLHttpRequest para fazer a solicitação de pesquisa no servidor.]{.font-medium.text-lg}

```js
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/search', function(req, res) {
  const query = req.query.q;
  
  // Gerar resultados aleatórios
  const results = [
    {
      title: 'Result 1',
      description: 'Description of result 1.'
    },
    {
      title: 'Result 2',
      description: 'Description of result 2.'
    },
    {
      title: 'Result 3',
      description: 'Description of result 3.'
    }
  ];

  // Filtrar resultados por consulta
  const filteredResults = results.filter(function(result) {
    return result.title.toLowerCase().includes(query.toLowerCase()) || result.description.toLowerCase().includes(query.toLowerCase());
  });

  res.json(filteredResults);
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
```

[Este código utiliza o framework Express para criar um servidor e implementar uma rota para lidar com consultas de pesquisa.]{.font-medium.text-lg}

[O servidor recebe consultas de pesquisa através da rota /**search** e filtra os resultados aleatórios gerados com base na consulta recebida.]{.font-medium.text-lg}

[O servidor responde com os resultados filtrados em formato JSON. O código utiliza também o módulo **express.static** para servir arquivos estáticos do diretório "public".]{.font-medium.text-lg}

[Depois de criar a parte HTML e CSS da página de busca, é hora de adicionar a funcionalidade de busca usando JavaScript e Ajax.]{.font-medium.text-lg}

[Para isso, primeiro precisamos adicionar um evento de clique ao botão de busca usando o método **addEventListener()** do JavaScript.]{.font-medium.text-lg}

[Em seguida, dentro da função de clique, vamos enviar uma solicitação de busca para o servidor usando o objeto **XMLHttpRequest** do Ajax.]{.font-medium.text-lg}

[O código abaixo mostra como podemos adicionar o evento de clique e enviar a solicitação de busca:]{.font-medium.text-lg}

```js
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', function() {
  const searchTerm = document.getElementById('searchTerm').value;
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const searchResults = document.getElementById('searchResults');
      searchResults.innerHTML = xhr.responseText;
    }
  }

  xhr.open('GET', `search.php?q=${searchTerm}`, true);
  xhr.send();
});
```

[Nesse exemplo, estamos pegando o termo de pesquisa digitado pelo usuário usando o método **getElementById()** do JavaScript.]{.font-medium.text-lg}

[Em seguida, criamos um objeto **XMLHttpRequest** e definimos sua função onreadystatechange() para lidar com a resposta da solicitação de busca.]{.font-medium.text-lg}

[Quando a resposta estiver pronta, verificamos se o status da resposta é **200** (que significa que a solicitação foi bem-sucedida) e, em seguida, atualizamos a parte da página que exibe os resultados da pesquisa com a resposta da solicitação usando o método **innerHTML**.]{.font-medium.text-lg}

[Por fim, abrimos a solicitação de busca usando o método **open()** do Ajax, passando o termo de pesquisa como um parâmetro na URL da solicitação, e enviamos a solicitação usando o método send().]{.font-medium.text-lg}

[Quando a resposta estiver pronta, verificamos se o status da resposta é **200** (que significa que a solicitação foi bem-sucedida) e, em seguida, atualizamos a parte da página que exibe os resultados da pesquisa com a resposta da solicitação usando o método **innerHTML**.]{.font-medium.text-lg}

# Implementando a funcionalidade de busca com Ajax


[Para implementar a funcionalidade de busca utilizando Ajax, podemos utilizar a biblioteca jQuery, que oferece funções simplificadas para realizar requisições assíncronas em JavaScript.]{.font-medium.text-lg}


[Primeiro, vamos criar uma função para realizar a requisição Ajax quando o usuário digitar algo na barra de pesquisa:]{.font-medium.text-lg}


[Quando a resposta estiver pronta, verificamos se o status da resposta é **200** (que significa que a solicitação foi bem-sucedida) e, em seguida, atualizamos a parte da página que exibe os resultados da pesquisa com a resposta da solicitação usando o método **innerHTML**.]{.font-medium.text-lg}

```js
function search() {
  $.ajax({
    type: 'GET',
    url: '/search', // endpoint da API que irá retornar os resultados da busca
    data: { query: $('#search-input').val() }, // valor da barra de pesquisa
    success: function(data) {
      // manipular os dados retornados pela API
    },
    error: function() {
      // tratar erros de requisição
    }
  });
}
```

[Aqui, estamos realizando uma requisição GET para o endpoint /**search** com o parâmetro **query**, que contém o valor da barra de pesquisa.]{.font-medium.text-lg}


[Quando a requisição for concluída com sucesso, a função **success** será chamada com os dados retornados pela API.]{.font-medium.text-lg}


[Agora, precisamos definir o comportamento da função **success**.]{.font-medium.text-lg}


[Uma opção seria renderizar os resultados da busca diretamente no navegador, mas isso exigiria que a API retornasse um HTML completo para cada resultado da busca.]{.font-medium.text-lg}

[Uma abordagem mais eficiente seria retornar apenas os dados relevantes em formato JSON e manipulá-los com JavaScript para renderizar a lista de resultados.]{.font-medium.text-lg}

[Para fazer isso, podemos adicionar o seguinte código à função **success**:]{.font-medium.text-lg}

```js
function search() {
success: function(data) {
  var results = JSON.parse(data); // converter a string JSON em objeto JavaScript
  var listItems = results.map(function(result) {
    return '<li>' + result.title + '</li>'; // criar um item de lista com o título do resultado
  });
  $('#search-results').html('<ul>' + listItems.join('') + '</ul>'); // renderizar a lista de resultados na página
},
```

[Aqui, estamos convertendo a string JSON retornada pela API em um objeto JavaScript, criando um item de lista para cada resultado da busca e, finalmente, renderizando a lista na página.]{.font-medium.text-lg}

# conclusão

[Neste artigo, aprendemos como criar um sistema de busca básico com JavaScript e Ajax.]{.font-medium.text-lg}

[Essa funcionalidade é essencial em muitos tipos de aplicativos web, permitindo aos usuários encontrar facilmente informações relevantes em grandes conjuntos de dados.]{.font-medium.text-lg}

[Combinado com técnicas de design responsivo e boas práticas de usabilidade, um sistema de busca bem projetado pode tornar sua aplicação mais útil e agradável de usar para os usuários.]{.font-medium.text-lg}