//Importando libs
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config() 

//Chamando a lib
const app = express(); 

const server = require('http').Server(app);
const io = require('socket.io')(server);


//Conexão com o banco de dados
mongoose.connect(`mongodb+srv://mgs:${process.env.DB_PASSWORD}@twitter.jmvtvue.mongodb.net/?retryWrites=true&w=majority`);

app.use((req, res, next) => {
    req.io = io;

    return next();
});

const corsOption = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
}

app.use(cors(corsOption));
app.use(express.json());
app.use(require('./routes'));

//Criando a rota para as requisições
server.listen(3000, () => {
    console.log('Server started on port 3000');
});