'use strict';

const app = require('@app');

app.use('@chewbank/ioa-config');
app.use('@chewbank/ioa-koa');
app.use('@chewbank/ioa-auth');

app.loader({
   "model": {
      "level": 20,
   },
   "xxx": {
      level: 30,
      action() {
         return 666;
      }
   },
})
