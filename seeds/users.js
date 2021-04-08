
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 8001, name: 'Alex', total_time: 0 },
        {id: 8002, name: 'Billy', total_time: 0 },
        {id: 8003, name: 'Alison', total_time: 0 }
      ]);
    });
};
