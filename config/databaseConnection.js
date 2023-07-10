const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/Education"

const databaseConnection = ()=>{
    mongoose
        .connect(MONGODB_URI)
        .then((conn)=> console.log(`Connected to DB: ${conn.connection.host}`))
        .catch((err)=> console.log(err.message));
}
module.exports = databaseConnection;