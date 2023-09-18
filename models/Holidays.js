const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    date: {
        type: Date,
        required: [true, 'Please enter a Date'],
    },
    type: {
        type: String,
        required: [true, 'Please enter a type'],
    }
})

module.exports = mongoose.model('Holiday', holidaySchema);