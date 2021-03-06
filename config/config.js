require('dotenv').load();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql'
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  production: {
    url: process.env.DATABASE_URL
  }
};
