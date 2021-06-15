require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const createError = require('http-errors');

require('./config/db.config')

const app = express()

//Middlewares

app.use(express.json());

//Routes

const routes = require('./config/routes.config')
app.use('/api', routes)

/* Handle Errors */

app.use((req, res, next) => {
    next(createError(404, 'Route not found'));
});

const port = Number(process.env.PORT || 3001)

app.get('/', (req, res, next) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Ready! Listen on port ${port}`)
})