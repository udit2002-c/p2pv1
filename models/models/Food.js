const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    foodQuantity: {
        type: Number,
        required: true,
    },
    // Add other fields as needed
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
