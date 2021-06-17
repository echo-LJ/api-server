const path = require('path')
module.exports = {
  port:process.env.DB_NAME ||3000,
  db: {
    database: process.env.DB_NAME || 'apiserver',
    user: process.env.DB_USER || 'apiserver',
    password: process.env.DB_PASS || 'apiserver',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../apiserver.sqlite')
    
    }
  }
}