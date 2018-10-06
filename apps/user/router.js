'use strict';

const app = require('ioa')

const { test, intercept, cors } = app.middleware

app.get('/user', cors, test, 'index.home')

app.get('/user/:id', cors, test, 'index.details')

app.get('/user/intercept', cors, intercept, 'index.details')