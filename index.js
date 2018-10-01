'use strict';

// 由于根模块内部存在相互引用，需要提前导出app依赖
module.exports = require('./lib/app')

// 加载主框架
require('./lib/main')

// 加载组件框架
require('./lib/component')

// http服务
require('./lib/http')