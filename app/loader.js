'use strict';

const app = require(process.cwd())

const loader = app.loader({
   "server": {
      "path": "app/server/",
      import(filename, func) {
         if (func instanceof Function) {
            return func(this)
         } else {
            throw new Error(`${filename}`)
         }
      }
   }
})

Object.assign(app, loader)