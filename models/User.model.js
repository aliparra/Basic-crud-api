const mongoose = require('mongoose')
const { Schema, model } = require('mongoose');

const userSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'Name is required.'],
      },
      birthdate: {
        type: Date,
        required: [true, 'Birthdate is required.'],
      }
    },
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
          ret.id = doc._id
          delete ret._id
          delete ret.__v
          return ret
        }
      }
    }
  )

const User = mongoose.model('User', userSchema)

module.exports = User