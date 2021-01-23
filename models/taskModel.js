const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    reward: {
        type: String
    },
    category: {
        type: String,
        default: 'Household'
    }
})

module.exports = mongoose.model('Task', taskSchema);