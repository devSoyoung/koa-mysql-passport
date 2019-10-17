const Router = require('koa-router');
const router = new Router();
const controller = require('./authController');

router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;