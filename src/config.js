const config = {
  development: {
    DB: {
      name: 'toyproject_db',
      user: 'user',
      password: 'passWord1234*',
    },
  },
  production: {
    DB: {
      name: '',
      user: '',
      password: '',
    },
  },
};

module.exports = config;