
exports.up = function(knex) {
  return knex.schema.createTable('meditation', function (table) {
    table.increments('id').primary()
    table.string('meditation_name')
    table.integer('time')
    table.string('date')
    table.integer('user_id')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('meditation')
  
};
