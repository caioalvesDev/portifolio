---
title: Como criar um aplicativo de podcast com Next.js
description: Este artigo ensina como criar um aplicativo de podcast utilizando o framework Next.js. Ele aborda a criação de componentes reutilizáveis, a realização de solicitações de API e a implantação do aplicativo na AWS.
date: 2023-12-06
cover: next.png
icon: "mdi:calendar-blank"
tags:
  - Javascript
  - Next
  - React
---

# Como criar um aplicativo de podcast com Next.js

[Este artigo ensina como criar um aplicativo de podcast utilizando o framework Next.js. Ele aborda a criação de componentes reutilizáveis, a realização de solicitações de API e a implantação do aplicativo na AWS.]{.font-medium.text-xl}

::PostDate{ :icon='icon' :date='date'}
::
![Earth from Space](/images/blog/next.png){.rounded-lg.w-full}

[Criar um aplicativo de podcast é uma ótima maneira de explorar os recursos do Next.js e criar uma aplicação rica em recursos que permite que seus usuários escutem e descubram novos podcasts.]{.font-medium.text-lg}

[Neste tutorial, mostraremos como criar um aplicativo de podcast usando o Next.js e algumas bibliotecas populares.]{.font-medium.text-lg}

# Pré-requisitos

[Antes de começar, você precisará ter o Node.js e o npm instalados em sua máquina.]{.font-medium.text-lg}

[Você também precisará ter uma conta no serviço de hospedagem de arquivos da Amazon, o Amazon S3, para armazenar os arquivos de áudio do seu podcast.]{.font-medium.text-lg}

# Configurando o projeto

[Para começar, crie um novo diretório para o seu projeto e abra-o em seu terminal.]{.font-medium.text-lg}

[Em seguida, execute o seguinte comando para criar um novo projeto Next.js:]{.font-medium.text-lg}

```bash
npx create-next-app my-podcast-app
```

[Isso criará um novo projeto Next.js em um diretório chamado **my-podcast-app**. Em seguida, acesse o diretório do projeto usando o seguinte comando:]{.font-medium.text-lg}

```bash
cd my-podcast-app
```

# Configurando as dependências

[Agora que temos um novo projeto Next.js, precisamos adicionar algumas dependências para criar nosso aplicativo de podcast.]{.font-medium.text-lg}

[Execute o seguinte comando no terminal para instalar as dependências necessárias:]{.font-medium.text-lg}

```bash
npm install --save react react-dom next @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome axios moment next-s3-upload query-string
```

[Aqui está uma breve descrição de cada uma das dependências que estamos instalando:]{.font-medium.text-lg}

- **react**, **react-dom** e **next**: são as dependências básicas para criar um aplicativo Next.js.
- **@fortawesome/fontawesome-svg-core**, **@fortawesome/free-solid-svg-icons** e **@fortawesome/react-fontawesome:** são as dependências para usar ícones em nosso aplicativo.
- **axios:** é uma biblioteca para fazer solicitações HTTP.
- **moment:** é uma biblioteca para manipular datas.
- **next-s3-upload:** é uma biblioteca para fazer upload de arquivos para o Amazon S3.
- **query-string:** é uma biblioteca para analisar e serializar strings de consulta.

# Criando os componentes

[Agora que temos todas as dependências instaladas, podemos começar a criar os componentes para nosso aplicativo de podcast.]{.font-medium.text-lg}

# Header

[Vamos começar criando o componente de cabeçalho do nosso aplicativo.]{.font-medium.text-lg}

[Crie um novo arquivo chamado **Header.js** em um diretório chamado **components**. Em seguida, adicione o seguinte código:]{.font-medium.text-lg}

```tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faPodcast} />
        <span>My Podcast App</span>
      </div>
    </div>
  );
};

export default Header;
```

[Este componente exibe o logotipo do nosso aplicativo de podcast, que consiste em um ícone de microfone e o nome do aplicativo.]{.font-medium.text-lg}

# Footer

[Em seguida, vamos criar o componente do rodapé do nosso aplicativo.]{.font-medium.text-lg}

[Crie um novo arquivo chamado **Footer.js** em um diretório chamado **components**. Em seguida, adicione o seguinte código:]{.font-medium.text-lg}

```tsx
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <span>&copy; 2023 My Podcast App. All rights reserved.</span>
    </div>
  );
};

export default Footer;
```

[Este componente exibe uma mensagem de direitos autorais no rodapé do nosso aplicativo.]{.font-medium.text-lg}

# PodcastList

[Em seguida, vamos criar o componente de lista de podcasts.]{.font-medium.text-lg}

[Crie um novo arquivo chamado **PodcastList.js** em um diretório chamado **components**.]{.font-medium.text-lg}

[Em seguida, adicione o seguinte código:]{.font-medium.text-lg}

```tsx
import React from 'react';
import axios from 'axios';
import moment from 'moment';

const PodcastList = ({ podcasts }) => {
  return (
    <div className="podcast-list">
      {podcasts.map((podcast) => (
        <div key={podcast.id} className="podcast-item">
          <div className="podcast-image">
            <img src={podcast.image} alt={podcast.title} />
          </div>
          <div className="podcast-info">
            <div className="podcast-title">{podcast.title}</div>
            <div className="podcast-date">
              {moment(podcast.date).format('MMM D, YYYY')}
            </div>
            <div className="podcast-description">{podcast.description}</div>
            <audio controls>
              <source src={podcast.audio} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastList;
```

[Este componente exibe uma lista de podcasts com informações como título, data, descrição e áudio.]{.font-medium.text-lg}

# HomePage

[Agora que criamos nossos componentes, vamos criar a página inicial do nosso aplicativo de podcast.]{.font-medium.text-lg}

[Crie um novo arquivo chamado **index.js** em um diretório chamado **pages**.]{.font-medium.text-lg}

[Em seguida, adicione o seguinte código:]{.font-medium.text-lg}

```tsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import queryString from 'query-string';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PodcastList from '../components/PodcastList';

const HomePage = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const response = await axios.get('/api/podcasts');
      setPodcasts(response.data);
    };

    fetchPodcasts();
  }, []);

  return (
    <div className="page">
      <Head>
        <title>My Podcast App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="content">
        <PodcastList podcasts={podcasts} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
```

[Este componente exibe uma lista de podcasts na página inicial do nosso aplicativo de podcast.]{.font-medium.text-lg}

[Ele usa o componente **PodcastList** que criamos anteriormente.]{.font-medium.text-lg}

# API

[Agora que criamos nossa página inicial, precisamos criar a API para buscar os podcasts do servidor.]{.font-medium.text-lg}

[Crie um novo diretório chamado **api** e um arquivo chamado **podcasts.js.**]{.font-medium.text-lg}

[Em seguida, adicione o seguinte código:]{.font-medium.text-lg}

```tsx
import AWS from 'aws-sdk';
import nextS3Upload from 'next-s3-upload';

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

const handler = nextS3Upload({
  bucketName: process.env.S3_BUCKET_NAME,
  aws: AWS,
});

export default handler;
```

[Este código usa as credenciais da AWS para criar uma nova instância do serviço S3.]{.font-medium.text-lg}

[Ele também cria um manipulador de upload usando a biblioteca **next-s3-upload.**]{.font-medium.text-lg}

# Conclusão

[Com este artigo, você aprendeu como criar um aplicativo de podcast com Next.js.]{.font-medium.text-lg}

[Aprendemos a criar componentes reutilizáveis, como fazer solicitações de API e como implantar nosso aplicativo na AWS.]{.font-medium.text-lg}
