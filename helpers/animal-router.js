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

router.delete('/delete', async (req, res) => {
    try{
        const count = await Animal.remove(req.params.id)

        if(count > 0){
            res.status(200).json("The animal has been removed")
        } else {
            res.status(401).json("The animal could not be found")
        }

    } catch(error){
        res.status(500).json(error)
    }
})