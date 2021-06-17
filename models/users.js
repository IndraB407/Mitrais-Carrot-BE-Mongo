const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    role_id: {
        type: Number
    }
})

const user = mongoose.model("users", userSchema)
module.exports = user