---
title: Como criar uma galeria de imagens com JavaScript
description: O texto explica como criar uma galeria de imagens interativa usando JavaScript, com passos para criar a estrutura HTML, adicionar funcionalidade de clique nas imagens, exibir as imagens em uma janela modal e estilizar a galeria com CSS.
date: 2023-12-08
cover: javascript.png
icon: "mdi:calendar-blank"
tags:
  - Javascript
  - Html
  - Css
---

# Como criar uma galeria de imagens com JavaScript

[O texto explica como criar uma galeria de imagens interativa usando JavaScript, com passos para criar a estrutura HTML, adicionar funcionalidade de clique nas imagens, exibir as imagens em uma janela modal e estilizar a galeria com CSS.]{.font-medium.text-xl}

::PostDate{ :icon='icon' :date='date'}
::
![Earth from Space](/images/blog/javascript.png){.rounded-lg.w-full}

[Com o JavaScript, é possível criar uma galeria de imagens interativa que pode ser usada para exibir uma coleção de imagens de forma atraente e dinâmica na web.]{.font-medium.text-lg}

[Neste artigo, vamos discutir como criar uma galeria de imagens com JavaScript.]{.font-medium.text-lg}

# Passo 1: Estrutura do HTML:

[Para criar a galeria de imagens, precisamos da estrutura básica do HTML.]{.font-medium.text-lg}

[Vamos começar criando uma tag div que vai conter as imagens:]{.font-medium.text-lg}

```html
<div class="gallery"></div>
```

# Passo 2: Adicionar as imagens na galeria:

[Agora que temos a estrutura básica, vamos adicionar as imagens à galeria.]{.font-medium.text-lg}

[Vamos criar um array que vai conter as URLs das imagens que queremos exibir na galeria:]{.font-medium.text-lg}

```js
const images = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
  "https://example.com/image4.jpg",
  "https://example.com/image5.jpg",
];
```

[Em seguida, vamos criar um loop para percorrer o array e adicionar cada imagem na galeria:]{.font-medium.text-lg}

```js
const gallery = document.querySelector(".gallery");
for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = images[i];
  gallery.appendChild(img);
}
```

[Aqui, estamos criando uma tag img para cada imagem no array, definindo o atributo src para a URL da imagem e adicionando a imagem na galeria usando o método appendChild.]{.font-medium.text-lg}

# Passo 3: Adicionar funcionalidades à galeria

[Agora que temos as imagens na galeria, vamos adicionar algumas funcionalidades para torná-la mais interativa.]{.font-medium.text-lg}

[Primeiro, vamos adicionar um evento de clique para cada imagem, que exibirá a imagem em uma janela modal quando clicada:]{.font-medium.text-lg}

```js
const modal = document.createElement("div");
modal.classList.add("modal");
gallery.appendChild(modal);

const modalImg = document.createElement("img");
modal.appendChild(modalImg);

const images = document.querySelectorAll(".gallery img");
images.forEach((img) => {
  img.addEventListener("click", (e) => {
    modalImg.src = e.target.src;
    modal.classList.add("open");
  });
});
```

[Aqui, estamos criando uma tag div para a janela modal, uma tag img para exibir a imagem na janela modal e adicionando um evento de clique para cada imagem na galeria.]{.font-medium.text-lg}

[Quando uma imagem é clicada, definimos o atributo src da tag img da janela modal para a URL da imagem clicada e adicionamos a classe "open" à janela modal para exibi-la.]{.font-medium.text-lg}

[Também vamos adicionar um evento de clique para a janela modal, para que ela seja fechada quando clicada:]{.font-medium.text-lg}

```js
modal.addEventListener("click", () => {
  modal.classList.remove("open");
});
```

[Aqui, estamos adicionando um evento de clique para a janela modal que remove a classe "open" para fechá-la quando clicada.]{.font-medium.text-lg}

# Passo 4: Estilização com CSS

[Agora que a funcionalidade da galeria está completa, vamos estilizar a galeria com CSS.]{.font-medium.text-lg}

[Vamos adicionar algumas propriedades para posicionar as imagens na galeria e definir a aparência da janela modal:]{.font-medium.text-lg}

```js
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery img {
  width: 200px;
  height: 200px;
  margin: 10px;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal img {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}

.modal.open {
  display: flex;
}
```

[Aqui, estamos definindo a propriedade display como flex para a galeria e flex-wrap como wrap para que as imagens possam ser exibidas em várias linhas.]{.font-medium.text-lg}

[Além disso, estamos definindo a propriedade justify-content como center para centralizar as imagens horizontalmente.]{.font-medium.text-lg}

[Também estamos definindo a largura e a altura das imagens como 200px e adicionando uma margem de 10px para espaçar as imagens.]{.font-medium.text-lg}

[A propriedade cursor é definida como pointer para indicar que as imagens são clicáveis.]{.font-medium.text-lg}

[Para a janela modal, estamos definindo a propriedade position como fixed para fixá-la na tela e as propriedades top e left como 0 para posicioná-la no topo e à esquerda da tela.]{.font-medium.text-lg}

[A propriedade background-color está definida como rgba(0, 0, 0, 0.8) para criar um fundo preto semi-transparente. A propriedade display está definida como none para ocultar a janela modal e a propriedade z-index está definida como 9999 para colocá-la acima de todos os outros elementos da página.]{.font-medium.text-lg}

[Também estamos definindo a propriedade justify-content como center e align-items como center para centralizar a imagem na janela modal. A propriedade max-width e max-height são definidas como 80% para evitar que a imagem ultrapasse a janela modal.]{.font-medium.text-lg}

[A propriedade object-fit é definida como contain para manter a proporção da imagem.]{.font-medium.text-lg}

[Por fim, estamos adicionando a classe "open" à janela modal para exibi-la quando uma imagem é clicada.]{.font-medium.text-lg}

# Conclusão

[Criar uma galeria de imagens com JavaScript pode ser uma ótima maneira de exibir uma coleção de imagens de forma interativa e atraente na web.]{.font-medium.text-lg}

[Com o código fornecido acima, é possível criar uma galeria básica que pode ser estilizada para se adequar às necessidades do seu projeto. Espero que este artigo tenha sido útil para você!]{.font-medium.text-lg}
