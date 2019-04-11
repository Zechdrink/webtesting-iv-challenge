const express = require('express');
const Animal = require('./animalDb');
const router = express.Router();

router.post('/post', async (req, res) => {
    try {
        const animal = await Animal.create(req.body);
    res.status(201).json(animal);
} catch(error){
    res.status(500).json(error);
}
})