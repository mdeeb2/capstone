const mongoose = require('mongoose');

const chartSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        minlength: 7,
        maxlength: 7 
    }
}, { collection: "chart" });


const chartData = mongoose.model("chart", chartSchema);
module.exports = chartData