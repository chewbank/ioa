'use strict';

const app = require('@app');

app.use('@chewbank/ioa-config');
app.use('@chewbank/ioa-koa');
app.use('@chewbank/ioa-auth');
app.use('./@common');

app.loader({
   "model": {
      "level": 20,
   },
   "other": {
      level: 30
   },
   "test": {
      level: 30,
      action() {
         return 666;
      }
   },
})