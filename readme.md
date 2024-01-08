# Backend de uma aplicação de microblog _(Twitter)_

### Projeto desenvolvido em _Javascript_ e _NodeJS_ para replicar funcionalidades básicas (Criar, Listar e Curtir postagens) de um sistema de microblog (twitter).

## Funcionalidades:

* Criar publicação
* Listar publicações
* Curtir uma publicação

## Regras da API

### A API integra o sistema com o banco de dados em MongoDB

* ### Criar postagem (methods='POST', rota='/tweets'):
  * No corpo da requisição é necessário conter apenas as chaves "author" e "content"
  * As chaves "_id", "likes" e "createdAt" são criadas automaticamente
  * A chave "likes" inicia com o valor padrão 0

* ### Listar postagens (methods='GET', rota='/tweets'):
  * Retorna todas as publicações criadas

* ### Curtir publicação (methods='POST', rota='/likes/'):
  * Como parâmetro da rota é passado apenas o id da publicação no banco

## Próximos passos
  
  * Futuramente o sistema irá receber atualização para implementar o socket.io e emitir alertas em tempo real sobre novos tweets e novos likes;

## 🛠 Techs Stack

<div style="display: inline_block"><br>
  <img align="center" alt="Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
  <img align="center" alt="Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Python" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg">
</div>