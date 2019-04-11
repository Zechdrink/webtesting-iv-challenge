const express = require('express');


const server = express();

server.use(express.json());

server.get('/', (req, res, next) => {
    res.send('Welcome to my server')
})

module.exports = server;