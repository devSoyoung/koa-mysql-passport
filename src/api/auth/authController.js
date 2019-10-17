// models load
const db = require('../../models');

/*
  POST /api/auth/register
  {
    email,
    password,
    name,
  }
*/
exports.register = async (ctx, next) => {
  const { email, password, name } = ctx.request.body;

  // 중복 확인
  const existUser = await db.User.findOne({
    where: { email }
  });
  if (existUser) {
    ctx.throw(409, "User already exists.");
  }

  const result = await db.User.create({ email, password, name });
  ctx.body = {
    message: "Register Successfully!",
    isAdmin: result.admin,
  }
};


/*
  POST /api/auth/login
  {
    username,
    password
  }
 */
exports.login = async (ctx, next) => {
  // const { username, password } = ctx.request.body;
  // const user = await User.findOneByUsername(username);
  //
  // if (!user) {
  //   ctx.throw(404, "User doesn't exist.");
  // }
  // if (!user.verify(password)) {
  //   ctx.throw(403, "Login failed: Wrong password.");
  // }
  //
  // ctx.body = {
  //   message: "Login Success."
  // };
};