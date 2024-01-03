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

// Set up basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Smart Food-Saving Tool backend!');
});

// Import models
const Plate = require('./models/Plate');
const Food = require('./models/Food');

// Set up plate optimization route
app.post('/api/plate-optimization', async (req, res) => {
    try {
        const { remainingPlates, shortfall, dayOfWeek } = req.body;

        // Save plate data to MongoDB
        const plate = await Plate.create({ remainingPlates, shortfall, dayOfWeek });

        // Implement plate optimization logic here
        const weeklyAverages = await calculateWeeklyAverages();

        // Send the response
        res.json({ weeklyAverages });
    } catch (error) {
        console.error('Error in /api/plate-optimization:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Set up feeding forward route
app.post('/api/feeding-forward', async (req, res) => {
    try {
        const { foodQuantity } = req.body;

        // Save food data to MongoDB
        const food = await Food.create({ foodQuantity });

        // Implement feeding forward logic here

        // Send the response
        res.json({ message: 'Food quantity received successfully' });
    } catch (error) {
        console.error('Error in /api/feeding-forward:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Function to calculate weekly averages
async function calculateWeeklyAverages() {
    try {
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
    } catch (error) {
        throw error;
    }
}
