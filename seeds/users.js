
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 8001, name: 'Alex'},
        {id: 8002, name: 'Billy'},
        {id: 8003, name: 'Alison'}
      ]);
    });
};
