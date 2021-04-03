const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const database = knex(config[env])

function addUser(obj, db = database) {
  return db('users').insert(obj)
  .catch((err) => {
    console.log(err.message)
})
  
}

function getNameId (obj, db = database) {
  return db('users')
  .where('name', obj.name)
  .select()
  .catch((err) => {
    console.log(err.message)
})
}

function addMeditation (obj, db = database) {
  return db('meditation')
  .insert(obj)
  .select()
  .catch((err) => {
    console.log(err.message)
})
}

function getAllUsers (db = database) {
  return db('users')
  .select()
  .catch((err) => {
    console.log(err.message)
})
}

function getMeditationbyID (id, db = database) {
  return db('meditation')
  .where('meditation.user_id', id)
  .catch((err) => {
    console.log(err.message)
})
}


module.exports = {
  addUser,
  addMeditation,
  getNameId,
  getAllUsers,
  getMeditationbyID,
}