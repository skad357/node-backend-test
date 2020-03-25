if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    APPLICATION: process.env.APPLICATION,
    JWT_SECRET: process.env.JWT_SECRET
}