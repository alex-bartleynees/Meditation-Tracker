
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)


function addUser(obj, db = connection) {
  return db('users').insert(obj)
    .catch((err) => {
      console.log(err.message)
    })

}

function getNameId(obj, db = connection) {
  return db('users')
    .where('name', obj.name)
    .select()
    .catch((err) => {
      console.log(err.message)
    })
}

function addMeditation(obj, db = connection) {
  return db('meditation')
    .insert(obj)
    .select()
    .catch((err) => {
      console.log(err.message)
    })
}

function getAllUsers(db = connection) {
  return db('users')
    .select()
    .catch((err) => {
      console.log(err.message)
    })
}

function getMeditationbyID(id, db = connection) {
  return db('meditation')
    .where('meditation.user_id', id)
    .orderBy('meditation_name', 'asc')
    .orderBy('time', 'asc')
    .orderBy('date', 'asc')
    .catch((err) => {
      console.log(err.message)
    })
}

function deleteUser(obj, db = connection) {
  return db('users')
    .where('name', obj.name)
    .del()
    .catch((err) => {
      console.log(err.message)
    })
}

function totalTime(arr, db = connection) {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return arr.reduce(reducer);

}

module.exports = {
  addUser,
  addMeditation,
  getNameId,
  getAllUsers,
  getMeditationbyID,
  deleteUser,
  totalTime,
}