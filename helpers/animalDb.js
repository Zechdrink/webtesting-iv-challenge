const db = require('../data/dbConfig.js');

module.exports = {
    create,
    remove
}

async function create(animal) {
    const [id] = await db('animals').insert(animal)

    return db('animals')
    .where({ id })
    .first()
    
  }
  
  function remove(id) {
    return db('animals')
      .where('id', id)
      .del();
  }
  