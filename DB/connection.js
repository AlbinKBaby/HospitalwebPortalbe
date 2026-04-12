const mongoose = require('mongoose')

const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string)
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.log("Connection error:", err);
})