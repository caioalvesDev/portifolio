---
title: 'Introdução ao Conceito de Programação Orientada a Objetos em JavaScript'
description: 'O artigo explica como usar Programação Orientada a Objetos em JavaScript, incluindo exemplos de criação de objetos e classes. É um bom começo para quem quer aprender sobre POO em JavaScript.'
date: 2023-12-08
cover: javascript.png
icon: "mdi:calendar-blank"
tags:
  - Javascript
---

# Introdução ao Conceito de Programação Orientada a Objetos em JavaScript

[O artigo explica como usar Programação Orientada a Objetos em JavaScript, incluindo exemplos de criação de objetos e classes. É um bom começo para quem quer aprender sobre POO em JavaScript.]{.font-medium.text-xl}


::PostDate{ :icon='icon' :date='date'}
::
![Earth from Space](/images/blog/javascript.png){.rounded-lg.w-full}

[JavaScript é uma linguagem de programação amplamente utilizada, tanto para desenvolvimento web quanto para criação de aplicativos.]{.font-medium.text-lg}

[Um dos paradigmas de programação mais comuns em JavaScript é a Programação Orientada a Objetos (POO).]{.font-medium.text-lg}

[Neste artigo, vamos discutir o que é POO e como aplicá-la em JavaScript.]{.font-medium.text-lg}


# O que é Programação Orientada a Objetos?

[POO é um paradigma de programação que se baseia em objetos, em vez de funções.]{.font-medium.text-lg}

[Cada objeto possui um conjunto de propriedades e métodos, que descrevem suas características e comportamentos.]{.font-medium.text-lg}

[A POO permite que os programadores criem objetos que representem coisas do mundo real e trabalhem com eles de forma mais intuitiva.]{.font-medium.text-lg}

[Em POO, os objetos são criados a partir de classes, que são definidas como um modelo ou plano para a criação de objetos.]{.font-medium.text-lg}

[Cada objeto criado a partir de uma classe é chamado de instância.]{.font-medium.text-lg}

[As classes podem herdar propriedades e métodos de outras classes, permitindo a criação de hierarquias de classes que compartilham comportamentos semelhantes.]{.font-medium.text-lg}


# Como aplicar POO em JavaScript?

[JavaScript é uma linguagem de programação que suporta POO, mas não é uma linguagem puramente orientada a objetos.]{.font-medium.text-lg}

[Em JavaScript, os objetos são criados usando funções construtoras ou classes (a partir do ECMAScript 2015).]{.font-medium.text-lg}

[Vamos discutir como criar objetos e classes em JavaScript.]{.font-medium.text-lg}


# Criando Objetos

[Em JavaScript, um objeto pode ser criado usando uma função construtora ou um objeto literal.]{.font-bold.text-2xl.text-black}

```js
// Criando um objeto usando uma função construtora
function Carro(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

let carro1 = new Carro('Toyota', 'Corolla', 2022);

// Criando um objeto usando um objeto literal
let carro2 = {
  marca: 'Honda',
  modelo: 'Civic',
  ano: 2023
};
```

# Criando Classes

[A partir do ECMAScript 2015, JavaScript suporta a criação de classes usando a palavra-chave **class**.]{.font-bold.text-2xl.text-black}

```js
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  get idade() {
    return new Date().getFullYear() - this.ano;
  }

  set modelo(novoModelo) {
    this.modelo = novoModelo;
  }
}

let carro1 = new Carro('Toyota', 'Corolla', 2022);
console.log(carro1.idade); // Saída: 1

carro1.modelo = 'Camry';
console.log(carro1.modelo); // Saída: Camry
```

[Na classe **Carro** acima, temos um construtor que é usado para criar instâncias da classe.]{.font-medium.text-lg}

[A classe também possui um método getter e um método setter.]{.font-medium.text-lg}

# Conclusão

[Em resumo, a POO é um paradigma de programação que se baseia em objetos, em vez de funções.]{.font-medium.text-lg}

[JavaScript suporta POO usando funções construtoras ou classes.]{.font-medium.text-lg}

[A partir do ECMAScript 2015, JavaScript suporta a criação de classes usando a palavra-chave class, o que torna a criação de objetos e classes mais intuitiva e fácil de entender.]{.font-medium.text-lg}

[A POO permite que os programadores criem código mais organizado, modular e fácil de manter.]{.font-medium.text-lg}

[Ao criar objetos que representam coisas do mundo real, é mais fácil entender e manipular o comportamento do código.]{.font-medium.text-lg}

[Além disso, a POO oferece recursos como encapsulamento, herança e polimorfismo, que podem ser usados para criar código mais reutilizável e extensível.]{.font-medium.text-lg}

[Em resumo, a Programação Orientada a Objetos é uma abordagem poderosa para desenvolvimento de software, que pode ajudar os programadores a criar código mais organizado e fácil de manter.]{.font-medium.text-lg}

[JavaScript suporta POO usando funções construtoras ou classes, e a partir do ECMAScript 2015, a criação de classes tornou-se mais intuitiva e fácil de entender.]{.font-medium.text-lg}
