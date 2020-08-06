<!-- 
    Thank you for reading this
    If you´re having any problem with this project please contact in the issues session
-->

<!-- VARS -->

[license-badge]: https://img.shields.io/github/license/richielybmp/proffy?color=%238257E5
[star-badge]: https://img.shields.io/github/stars/richielybmp/proffy?color=8257E5&logo=github
[last-commit-badge]: https://img.shields.io/github/last-commit/richielybmp/proffy?color=%238257E5
[netfly-badge]: https://img.shields.io/netlify/b4d3ee80-98f0-42d0-b3d0-13879c811a00?color=%238257E5
[codacy-badge]: https://app.codacy.com/project/badge/Grade/b2d32fa731984f3e9c3eaa814861c9db
[netfly-url]: https://richielybmp-proffy.netlify.app
[license-url]: https://github.com/richielybmp/proffy/blob/master/LICENSE
[issues-url]: https://github.com/richielybmp/proffy/issues/
[node-url]: https://nodejs.org/en
[yarn-url]: https://classic.yarnpkg.com/
[npm-url]:  https://www.npmjs.com/
[expo-url]: https://expo.io/
[nlw-badge]: https://img.shields.io/badge/NLW-building-important?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==

<!-- VARS -->

<div align="center">  

<a href="https://nlw2-proffy-web.herokuapp.com" target="_blank">
<img width="500px" align="center" src="https://user-images.githubusercontent.com/54639269/89223832-dd796380-d5ad-11ea-9a39-fc852538ca13.png"></img>
</a>
</div>

<br>
<p align="center">
    Conectando professores com estudantes. Uma plataforma web e mobile criada durante a Next Level Week  #02 da @Rocketseat</a> 🚀
</p>



<div align="center">  
    
[![license][license-badge]][license-url]
![Git Stars][star-badge]
![Last Commit][last-commit-badge]
![Codacy Quality][codacy-badge]


</div>

<p align="center">
    <a href="README.md">Ingçês</a>
    ·
    <a href="README-pt-br.md">Português</a>
 </p>

### Conteúdo
* [Iniciando](#Getting-Started-)
    * [Clone](#Cloning)
    * [Requisitos](#Requisitos)
        * [Web](#Web-)
        * [Servidor](#Server-)
        * [Aplicativo Mobile](#Mobile-)
    * [Tecnologias](#Technologies)
    * [Executando](#Running)
* [Problemas](#Issues-)
    * [Reportar](#Report)
* [Contribuição](#Contributing-)
* [Licença](#License-)

### Iniciando 🚀

#### Clone

```ps
# Faça o clone do repositório usando git
$ git clone https://github.com/richielybmp/proffy.git

# Acesse a pasta do projeto
$ cd proffy
```

#### Requisitos
* [Node.js][node-url]
* [Yarn][yarn-url] or [npm][npm-url]
* [Expo][expo-url]

#### Technologies
Esse projeto foi criado utilizando as seguintes tecnologias:
<ul>
  <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://expressjs.com/en/api.html#express">Express</a></li>
  <li><a href="https://www.sqlite.org/index.html">SQLite</a></li>
  <li><a href="http://knexjs.org/">Knex.js</a></li>
</ul>

##### Server 📦

###### :information_source: Deploy

- https://nlw2-proffy-backend.herokuapp.com

Esse projeto usa dependências de terceios que precisam ser instaladas, use o comando a seguir para instalar todas as dependências necessárias:

```ps
$ cd server
$ yarn install
```

>Os comandos abaixo irão instalar todas as dependências de terceiros utilizadas no projeto. Se você quisar instalá-las manualmente, siga os passos abaixo:

```ps
# Acesse o diretório do server
$ cd server

# Instalando dependências
$ yarn add @types/cors -D
$ yarn add @types/express -D
$ yarn add ts-node-dev -D
$ yarn add knex
$ yarn add sqlite3
```

##### Web 💻

###### :information_source: Deploy

- https://nlw2-proffy-web.herokuapp.com

Esse projeto usa dependências de terceios que precisam ser instaladas, use o comando a seguir para instalar todas as dependências necessárias:

```ps
$ cd web
$ yarn install
```

>Os comandos abaixo irão instalar todas as dependências de terceiros utilizadas no projeto. Se você quisar instalá-las manualmente, siga os passos abaixo:

```ps
# Acesse o diretório web
$ cd web

# Instalando dependências
$ yarn add @types/react-router-dom -D
$ yarn add axios
```

##### Mobile 📱

Esse projeto usa dependências de terceios e fontes que precisam ser instaladas, use o comando a seguir para instalar todas as dependências e fontes necessárias:

```ps
# Acesse o diretório mobile
$ cd mobile

# Instalando todas fontes usadas
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins

# Instalando dependências
$ yarn install
```
>Os comandos abaixo irão instalar todas as dependências de terceiros utilizadas no projeto. Se você quisar instalá-las manualmente, siga os passos abaixo:

```ps
# Instalando fontes usadas
$ expo install expo-font @expo-google-fonts/archivo
$ expo install expo-font @expo-google-fonts/poppins

# Instalando dependências
$ yarn add @react-navigation/native
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
$ yarn add @react-navigation/stack
$ yarn add @react-navigation/bottom-tabs
```

#### Running

Para iniciar o projeto web, execute o comando:

```ps
# Acessando o diretório web
$ cd web

# Executando o web
$ yarn start
```

Para iniciar o servidor back-end, execute o comando:

```ps
# Acessando o diretório server
$ cd server

# Executando o server
$ yarn start
```

para iniciar o aplicativo mobile, execute o comando:

```ps
# Acessando o diretório mobile
$ cd mobile

# Executando o aplicativo mobile
$ yarn start
```

### Issues 🐛

#### Report

Caso você estiver com problemas, sinta-se livre para reportar na sessão [Issues][issues-url].

### Contributing 🤝 

Existem várias formas de contribuir com esse projeto.

Se você quiser nos ajudar com o código, siga os seguintes passos:

```ps
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.
$ gh repo fork richielybmp/proffy

# Clone your fork
$ git clone {your-fork-url}
$ cd proffy

# Create a branch with your feature
$ git checkout -b {branch-name}

# Make the commit with your changes
$ git commit -m 'Feat: {feature-name}'

# Send the code to your remote branch
$ git push origin {branch-name}
```

Depois envie um Pull Request que será analizado e aprovado se o código ajudar com o projeto.


### License 📝
Esse projeto está sob a licença MIT. Veja a [LICENÇA][license-url] para mais informações.

Dê uma ⭐️ se esse projeto de ajudou de alguma forma!