const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        allowNull: false,
    },
    role: {
        type: String,
        allowNull: false,
    },
    image: {
        type: String,
        allowNull: false,
    },
})

const People = mongoose.model("People", peopleSchema);

module.exports = People;