const express = require('express')
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')()
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID

const id = () => {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  )
}

const url = 'mongodb://localhost:27017/'
const mongoClient = new MongoClient(url, { useNewUrlParser: true })
const app = express()
const jsonParser = express.json()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(pino)

let dbClient

mongoClient.connect((err, client) => {
  if (err) return console.log(err)

  dbClient = client
  app.locals.news = client.db('users_news_bd').collection('news')
  app.locals.users = client.db('users_news_bd').collection('users')
  app.listen(3001, () =>
    console.log('Express server is running on localhost:3001')
  )
})

app.post('/api/session/log', jsonParser, (req, res) => {
  let { login, password } = req.body
  const users = req.app.locals.users
  users.findOne({ login: login, password: password }, (err, result) => {
    if (err) return console.log(err)
    if (result) res.json(result)
    else res.json(false)
  })
})

app.post('/api/session', jsonParser, (req, res) => {
  let newUser = Object.assign(req.body)
  let id = new ObjectID(newUser._id)
  delete newUser._id
  const users = req.app.locals.users
  users.findOneAndUpdate(
    { _id: id },
    { $set: newUser },
    { returnOriginal: false },
    (err, result) => {
      if (err) return console.log(err)
      res.json(null)
    }
  )
})

app.get('/api/registration', (req, res) => {
  const users = req.app.locals.users
  users.find().toArray((err, result) => {
    if (err) return console.log(err)
    let newUser = Object.assign(result[0])
    delete newUser._id
    for (let arg in newUser) newUser[arg] = ''
    newUser.id = id()
    res.json(newUser)
  })
})

app.post('/api/registration', jsonParser, (req, res) => {
  const users = req.app.locals.users
  let user = Object.assign(req.body)
  users.insertOne(user, (err, result) => {
    if (err) console.log(err)
  })
})

//========================================================>

app.get('/api/getNews', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const news = req.app.locals.news
  news.find().toArray((err, result) => {
    if (err) return console.log(err)
    res.json(result)
  })
})

app.post('/api/updateNew', jsonParser, (req, res) => {
  let newNew = Object.assign(req.body)
  let id = new ObjectID(newNew._id)
  delete newNew._id
  const news = req.app.locals.news
  news.findOneAndUpdate(
    { _id: id },
    { $set: newNew },
    { returnOriginal: false },
    (err, result) => {
      if (err) return console.log(err)
      res.json(null)
    }
  )

})

app.post('/api/addNew', jsonParser, (req, res) => {
  let New = Object.assign(req.body)
  const news = req.app.locals.news
  news.insertOne(New, (err, result) => {
    if (err) return  console.log(err)
    res.json(result.ops[0])
  })
})

app.post('/api/deleteNew', jsonParser, (req, res) => {
  const news = req.app.locals.news
  let id = new ObjectID(req.body.id)
  news.deleteOne({_id : id}, (err, result) => {
    if (err) return console.log(err)
    res.json(null)
  })
})

process.on('SIGINT', () => {
  dbClient.close()
  process.exit()
})
