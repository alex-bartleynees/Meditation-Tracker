const express = require('express')
const db = require('./dbFuncs')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/addUser', (req, res) => {
  res.render('addUser')
})

router.post('/addUser', (req, res) => {

  const user = {
    name: req.body.userName
  }

  return db.addUser(user)
    .then(x => {
      res.redirect('/')
    })

})

router.get('/addMeditation', (req, res) => {
  res.render('addMeditation')
})

router.post('/addMeditation', (req, res) => {

  const name = {
    name: req.body.name,
  }

  db.getNameId(name)
    .then(id => {
      const nameId = id[0]

      const meditationData = {
        meditation_name: req.body.meditation,
        time: req.body.time,
        date: req.body.date,
        user_id: nameId.id
      }
    

      return db.addMeditation(meditationData)
        .then(x => {
          res.redirect('/')
          
        })
  
    })
    .catch((err) => {
      res.render('error')
  })

})

router.get('/viewUsers/', (req, res) => {
  return db.getAllUsers()
    .then(users => {
      res.render('viewUsers', { users: users })
    })
})

router.get('/meditation/:id', (req, res) => {
  const id = Number(req.params.id)
  return db.getMeditationbyID(id)
    .then(meditation => {
    
      return db.totalTime(meditation)
      .then(totalTime => {
        res.render('meditation', {meditation: meditation, totalTime: totalTime})
      })
    })
   
})

router.get('/delete', (req, res) => {
  res.render('delete')
})

router.post('/delete', (req, res) => {
  const userName = {
    name: req.body.delete
  }
  db.deleteUser(userName)
  res.redirect('/')
})


module.exports = router
