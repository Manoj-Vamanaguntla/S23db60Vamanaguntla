const mongoose = require("mongoose")
const vanSchema = mongoose.Schema({
    // van_color: String,
    // van_size: String,
    // van_cost: Number
    
// New code added for Assignment13
    van_color: {
        type: String,
        required: true
    },
    van_size: {
        type: String,
        required: true
    },
    van_cost: {
        type: Number,
        required: true,
        min: 0,
        max: 10000
    }
});
module.exports = mongoose.model("van",
vanSchema)