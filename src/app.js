const Koa = require('koa');

const port = process.env.PORT || 3000;

const app = new Koa();

// PORT 오픈
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;