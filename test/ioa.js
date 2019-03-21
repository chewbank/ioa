'use strict';

const test = require('jtf');
const typea = require('typea');
const axios = require('axios');
const ioa = require('..');

ioa.loader();

ioa.http();

let { port } = ioa;

axios.defaults.baseURL = `http://localhost:${port}`;

test('ioa', t => {

   const { data, error } = typea.strict(ioa, {
      version: String,
      cwd: String,
      NODE_ENV: String,
      logger: Function,
      loader: Function,
      Middleware: Array,
      main: Object,
      port: Number,
      apps: {
         main: {
            apps: Object,
            config: {},
            other: {
               a: Object,
               b: Object,
            },
            model: {
               compcerts: Object
            },
            middleware: {
               cors: Function,
               token: Function
            },
            Middleware: [Function],
            controller: {
               home: {
                  home: Function,
                  sms: Function,
                  login: Function,
               },
               news: {
                  home: Function,
                  details: Function,
               },
               rest: {
                  index: Function,
                  details: Function,
                  create: Function,
                  update: Function,
                  destroy: Function
               },
               test: {
                  index: Function,
                  details: Function,
                  create: Function,
                  update: Function,
                  destroy: Function
               }
            },
            router: {
               get: Function,
               post: Function,
               put: Function,
               delete: Function,
               resources: Function
            }
         },
         user: {
            apps: Object,
            config: {
               middleware: [String]
            },
            middleware: {
               test: Function,
               intercept: Function
            },
            Middleware: [Function],
            controller: {
               home: {
                  home: Function,
               }
            },
            router: {
               get: Function,
               post: Function,
               put: Function,
               delete: Function,
               resources: Function
            }
         },
         admin: {
            apps: Object,
            config: {
               middleware: [String]
            },
            model: { compcerts: Object },
            middleware: {
               token: Function
            },
            Middleware: [Function],
            controller: {
               home: {
                  index: Function,
                  details: Function,
                  add: Function,
                  update: Function,
                  delete: Function
               }
            },
            router: {
               get: Function,
               post: Function,
               put: Function,
               delete: Function,
               resources: Function
            }
         },
      },
      http: Function,
   })

   t.ok(data, error);

})