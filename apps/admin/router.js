'use strict';

const app = require('ioa')

const { token, cors } = app.middleware

// console.log(cors)

app.get('/admin', 'index.index')

app.get('/admin/:id', 'index.details')