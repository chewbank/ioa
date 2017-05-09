# 基于Koa的快速起步示例

## 目录结构

```
 app
  |- controller
  |   |- home
  |   |   |- index.js
  |   |   |- a.js
  |   |   |- b.js
  |   |   |- ...
  |   |   |- ...
  |   |
  |   |- index.js
  |
  |
  |- middleware
  |   |- middleware1.js
  |   |- middleware2.js
  |   |- ...
  |   |- ...
  |
  |
  |- model
  |   |- m1.js
  |   |- m2.js
  |   |- ...
  |   |- ...

 index.js

```

## 路由

不需要手动配置路由，路由会根据url自动定位到指定controller和action

## 控制器

支持多层控制器，url路径始终对应controller文件路径

## 模型

模型使用sequelize.js模块，提供强大的ORM和验证支持

## 中间件

使用方法与Koa一致