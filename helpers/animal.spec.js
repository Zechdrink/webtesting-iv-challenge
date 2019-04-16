const db = require('../data/dbConfig');
const Animal = require('./animalDb.js');
const request = require('supertest');
const server = require('./animal-router');




describe('animal table testing', () => {
    
    beforeEach(async () => {
        await db('animals').truncate();
    });
    
    
    
    describe('animal modal', () => {
        
        test('should create a new animal in the DB', async () => {
           const animal = await Animal.create({ name: 'Monkey' });

           expect(animal.name).toBe('Monkey')
            })

        test('should delete an animal', async () => {
          await Animal.create({ name: 'Bear'});
          await Animal.create({ name: 'Snake'});
          await Animal.remove(1);

          let newList = await db('animals')


          expect(newList[0].name).toBe('Snake');

        })
        
        });

        
    });