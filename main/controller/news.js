'use strict';

module.exports = class News {
   index(ctx) {
      ctx.body = 'news index';
   }
   details(ctx) {
      ctx.body = {
         params: ctx.params,
         body: 'news details'
      };
   }
}
