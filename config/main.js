module.exports = {  
  // Secret key for JWT signing and encryption
  'secret': 'super secret passphrase',
  // Database connection information
  'db': process.env.MONGODB_URI || "mongodb://localhost/mondegreen",
  // Setting port for server
  'port': process.env.PORT || 3001
    }