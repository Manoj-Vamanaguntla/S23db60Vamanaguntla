const mongoose = require("mongoose")
const vanSchema = mongoose.Schema({
    van_color: String,
    van_size: String,
    van_cost: Number
})
module.exports = mongoose.model("van",
vanSchema)