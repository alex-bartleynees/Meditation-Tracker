
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meditation').del()
    .then(function () {
      // Inserts seed entries
      return knex('meditation').insert([
        {id: 1, meditation_name: 'Mindfulness of Breathing', time: 30, date: '3rd April 2021', user_id: 8001},
        {id: 2, meditation_name: 'Mindfulness of Sound',time: 20, date: '3rd April 2021', user_id: 8002},
        {id: 3, meditation_name: 'Green Tara', time: 60, date: '3rd April 2021', user_id: 8001},
      ]);
    });
};
