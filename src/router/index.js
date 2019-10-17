const Router = require('koa-router');

const router = new Router();
const api = require('../api');

// api 라우트를 /api 경로 하위 라우트로 설정
router.use('/api', api.routes());

module.exports = router;