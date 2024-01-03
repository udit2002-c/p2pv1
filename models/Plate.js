const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://your_username:your_password@your_cluster_url/your_database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Set up the endpoint to handle plate optimizer data
app.post('/api/plate-optimizer', async (req, res) => {
    try {
        const { dayOfWeek, platesShort, platesExcess } = req.body;

        // Process the received data and store it in the database if needed

        // Calculate the weekly averages
        const weeklyAverages = calculateWeeklyAverages();

        res.json({
            success: true,
            weeklyAverages: weeklyAverages,
        });
    } catch (error) {
        console.error('Error in /api/plate-optimizer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

function calculateWeeklyAverages() {
    // Simulate weekly average calculation
    // You can replace this with actual database queries and calculations
    const totalPlatesShort = 0; // Replace with actual calculation
    const totalPlatesExcess = 0; // Replace with actual calculation

    const averagePlatesShort = totalPlatesShort / 7;
    const averagePlatesExcess = totalPlatesExcess / 7;

    return {
        averagePlatesShort,
        averagePlatesExcess,
    };
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
