
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

function getUserbyId (id, db = connection) {
  return db('users')
  .where('id', id)
  .catch((err) => {
    console.log(err.message)
  })
}

function getMeditationbyID(id, db = connection) {
  return db('meditation')
    .where('meditation.user_id', id)
    .orderBy('date', 'desc')
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

function totalTime(arr) {
  let timeArray = []
 for (let i = 0; i< arr.length; i++) {
     timeArray.push(arr[i].time)
 
 }
 const reducer = (accumulator, currentValue) => accumulator + currentValue;
 
 let totalTime =  timeArray.reduce(reducer) / 60;
 return totalTime

}
 
 

function insertTotalTime (func, id, db = connection) {
    return db('users')
    .where('id', id)
    .update({'total_time':func})
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
  deleteUser,
  totalTime,
  insertTotalTime,
  getUserbyId
}