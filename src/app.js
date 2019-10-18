const Koa = require('koa');

require('./api/passport');
const logger = require('koa-logger');
const parser = require('koa-bodyparser');
const router = require('./router');

const app = new Koa();
app
  .use(logger())
  .use(parser())
  .use(router.routes())
  .use(router.allowedMethods());

// PORT 오픈
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;