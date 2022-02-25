const mongoose = require("mongoose")





const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})




//MVC - Model View Controler
const Model = mongoose.model('customers', schema)

module.exports = Model