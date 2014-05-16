var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'view-engines'
    },
    port: 3000,
    db: 'mongodb://localhost/view-engines-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'view-engines'
    },
    port: 3000,
    db: 'mongodb://localhost/view-engines-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'view-engines'
    },
    port: 3000,
    db: 'mongodb://localhost/view-engines-production'
  }
};

module.exports = config[env];
