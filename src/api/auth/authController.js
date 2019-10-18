// models load
const db = require('../../models');
const jwt = require('jsonwebtoken');
const passport = require('koa-passport');
const config = require('../../config');

/*
  POST /api/auth/register
  {
    email,
    password,
    studentId,
    name,
    birth
  }
*/
exports.register = async (ctx, next) => {
  const { email, password, studentId, name, birth } = ctx.request.body;

  // 중복 확인
  const existUser = await db.User.findOne({
    where: { email }
  });
  if (existUser) {
    ctx.throw(409, "User already exists.");
  }

  await db.User.create({ email, password, name, studentId, birth });
  ctx.body = {
    message: "Register Successfully!",
  }
};


/*
  POST /api/auth/login
  {
    email,
    password
  }
 */
exports.login = async (ctx, next) => {
  return passport.authenticate('local', (err, user, info, status) => {
    if (err) {
      ctx.status = 400;
      ctx.body = {
        message: 'Something is not right.',
        user: user,
      };
      return;
    } else if (!user) {
      ctx.status = 404;
      ctx.body = {
        message: 'User not found.',
        user: user,
      };
      return;
    }

    const token = jwt.sign(user.toJSON(), config.secret);
    ctx.status = 200;
    ctx.body = {
      email: user.email,
      name: user.name,
      token,
    };
  })(ctx);
};