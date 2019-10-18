const Router = require('koa-router');
const router = new Router();
const controller = require('./userController');

router.post('/login', controller.login);

module.exports = router;