//Importando o express
const express = require('express');

//Módulo de rotas do express
const routes = express.Router();

//Importantdo o controller
const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

//Criando uma requisição atraves do Express
routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.post('/likes/:id', LikeController.store)

module.exports = routes;