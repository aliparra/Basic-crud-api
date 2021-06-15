const createError = require('http-errors')
const User = require('../models/User.model')

module.exports.create = (req, res, next) => {
    
    return User.create(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(next)
}

module.exports.getAll = (req, res, next) => {
    User.find()
      .then(users => res.json(users))
      .catch(next)
}

module.exports.getUser = (req, res, next) => {
    User.findById(req.body.id)
      .then(user => {
        if (!user) {
          next(createError(404))
        } else {
          res.json(user)
        }
      })
}

module.exports.update = (req, res, next) => {
    User.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        birthdate: req.body.birthdate
    })
      .then(user => {
        if (!user) {
          next(createError(404))
        } else {
          res.json(user)
        }
      })
}

module.exports.delete = (req, res, next) => {
    User.findByIdAndDelete(req.params.id)
      .then(user => {
        if (!user) {
          next(createError(404))
        } else {
          res.json(user)
        }
      })
}