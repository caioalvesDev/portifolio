---
title: Usando o Canvas para criar gráficos em JavaScript
description: O artigo apresenta como usar a API Canvas em HTML e JavaScript para criar gráficos personalizados com estilização e interatividade, resultando em visualizações de dados impressionantes e envolventes.
date: 2023-12-08
cover: javascript.png
icon: "mdi:calendar-blank"
tags:
  - Javascript
  - Html
  - Css
---

# Usando o Canvas para criar gráficos em JavaScript

[O artigo apresenta como usar a API Canvas em HTML e JavaScript para criar gráficos personalizados com estilização e interatividade, resultando em visualizações de dados impressionantes e envolventes.]{.font-medium.text-xl}

::PostDate{ :icon='icon' :date='date'}
::
![Earth from Space](/images/blog/javascript.png){.rounded-lg}

[O Canvas é uma API de desenho bidimensional em HTML que permite criar gráficos e gráficos interativos diretamente no navegador.]{.font-medium.text-lg}

[Com JavaScript, é possível controlar o que é desenhado no canvas e, com isso, criar visualizações de dados personalizadas e impressionantes.]{.font-medium.text-lg}

[Neste artigo, vamos mostrar como usar o Canvas para criar gráficos em JavaScript.]{.font-medium.text-lg}

# Configurando o Canvas

[Antes de começar a desenhar, precisamos configurar o Canvas em nosso HTML.]{.font-medium.text-lg}

[Primeiro, precisamos criar um elemento canvas em nossa página:]{.font-medium.text-lg}

```html
<canvas id="grafico"></canvas>
```

[Em seguida, precisamos configurar o tamanho do canvas e definir um contexto de desenho.]{.font-medium.text-lg}

[O contexto de desenho é o objeto que permite desenhar no canvas. Podemos fazer isso em JavaScript usando o seguinte código:]{.font-medium.text-lg}

```js
const canvas = document.getElementById("grafico");
const ctx = canvas.getContext("2d");
```

[Com isso, temos um canvas configurado e pronto para ser desenhado.]{.font-medium.text-lg}

# Desenhando no Canvas

[Agora que temos um canvas configurado, podemos começar a desenhar nossos gráficos.]{.font-medium.text-lg}

[O Canvas suporta uma variedade de formas, como linhas, arcos, retângulos e imagens. Vamos começar com um exemplo simples de desenhar uma linha no canvas:]{.font-medium.text-lg}

```js
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.stroke();
```

[Este código começa um novo caminho de desenho com **beginPath()**, move o ponto inicial para a posição **(0, 0)** com **moveTo()**, desenha uma linha até a posição **(100, 100)** com **lineTo()**, e, finalmente, desenha a linha com **stroke()**.]{.font-medium.text-lg}

[Agora que sabemos como desenhar linhas, podemos começar a criar gráficos mais complexos.]{.font-medium.text-lg}

[Por exemplo, podemos criar um gráfico de barras simples com o seguinte código:]{.font-medium.text-lg}

```js
const data = [10, 20, 30, 40, 50];
const barWidth = 50;
const barSpacing = 10;
const startX = 50;
const startY = 150;

for (let i = 0; i < data.length; i++) {
  const barHeight = data[i];
  const x = startX + i * (barWidth + barSpacing);
  const y = startY - barHeight;

  ctx.fillRect(x, y, barWidth, barHeight);
}
```

[Este código começa definindo um array de dados, **data**, que contém os valores das barras.]{.font-medium.text-lg}

[Em seguida, definimos o tamanho de cada barra com **barWidth** e a largura do espaço entre cada barra com **barSpacing**.]{.font-medium.text-lg}

[Também definimos as coordenadas de início do gráfico com **startX** e **startY**.]{.font-medium.text-lg}

[Por fim, iteramos sobre cada valor em data e desenhamos uma barra correspondente usando **fillRect()**.]{.font-medium.text-lg}

[A posição de cada barra é calculada com base no índice atual do loop e no tamanho de **barWidth** e **barSpacing**.]{.font-medium.text-lg}

# Personalizando o Gráfico

[Para criar gráficos mais avançados, precisamos personalizar a aparência e o estilo das formas que desenhamos.]{.font-medium.text-lg}

[Podemos fazer isso definindo propriedades de estilo para o contexto de desenho.]{.font-medium.text-lg}

[Algumas das propriedades mais comuns incluem a cor de preenchimento, a cor da borda, a largura da linha e a fonte do texto.]{.font-medium.text-lg}

[Por exemplo, podemos alterar a cor de preenchimento para azul e a largura da linha para 2 pixels com o seguinte código:]{.font-medium.text-lg}

```js
ctx.fillStyle = "blue";
ctx.lineWidth = 2;
```

[Também podemos definir a fonte do texto com a propriedade **font**. Por exemplo, podemos definir a fonte como Arial com o tamanho 12 pixels:]{.font-medium.text-lg}

```js
ctx.font = "12px Arial";
```

[Usando essas propriedades, podemos personalizar a aparência de nossos gráficos para torná-los mais legíveis e atraentes.]{.font-medium.text-lg}

# Interatividade

[Por fim, podemos adicionar interatividade aos nossos gráficos usando eventos do mo]{.font-medium.text-lg}

[Por exemplo, podemos adicionar um evento de clique a cada barra no gráfico de barras para exibir o valor correspondente]{.font-medium.text-lg}

```js
canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  for (let i = 0; i < data.length; i++) {
    const barHeight = data[i];
    const x = startX + i * (barWidth + barSpacing);
    const y = startY - barHeight;

    if (mouseX >= x && mouseX <= x + barWidth && mouseY >= y && mouseY <= startY) {
      alert(`Valor da barra ${i}: ${barHeight}`);
      break;
    }
  }
});
```

[Este código adiciona um evento de clique ao canvas que verifica se o mouse está dentro de uma barra no gráfico de barras.]{.font-medium.text-lg}

[Se estiver, exibimos um alerta com o valor correspondente da barra.]{.font-medium.text-lg}

[Também vamos adicionar um evento de clique para a janela modal, para que ela seja fechada quando clicada:]{.font-medium.text-lg}

# Conclusão

[O Canvas é uma API poderosa em HTML que permite criar gráficos e visualizações de dados personalizadas em JavaScript.]{.font-medium.text-lg}

[Com o conhecimento das formas básicas e das propriedades de estilo, podemos criar gráficos impressionantes que são fáceis de ler e entender.]{.font-medium.text-lg}

[E com a adição de interatividade, podemos criar experiências de usuário envolventes e informativas.]{.font-medium.text-lg}
