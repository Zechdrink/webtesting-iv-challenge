
exports.up = function(knex, Promise) {
    return knex.schema.createTable('animals', function(animals) {
        animals.increments();
    
        animals.string('name', 128).notNullable();
        animals.boolean('extinct').defaultTo(false);
        
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('animals');
};
