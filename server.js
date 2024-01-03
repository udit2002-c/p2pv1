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

// Set up plate optimization route
app.post('/api/plate-optimization', (req, res) => {
    const { remainingPlates, shortfall } = req.body;

    // Implement plate optimization logic here
    const additionalPlates = /* Calculate additional plates */;
    const surplusPlates = /* Calculate surplus plates */;

    // Send the response
    res.json({ additionalPlates, surplusPlates });
});

// Set up feeding forward route
app.post('/api/feeding-forward', (req, res) => {
    const { foodQuantity } = req.body;

    // Implement feeding forward logic here

    // Send the response
    res.json({ message: 'Food quantity received successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// ...

const Plate = require('./models/Plate');
const Food = require('./models/Food');

// ...

// Set up plate optimization route
app.post('/api/plate-optimization', async (req, res) => {
    try {
        const { remainingPlates, shortfall } = req.body;

        // Save plate data to MongoDB
        const plate = await Plate.create({ remainingPlates, shortfall });

        // Implement plate optimization logic here
        const additionalPlates = /* Calculate additional plates */;
        const surplusPlates = /* Calculate surplus plates */;

        // Send the response
        res.json({ additionalPlates, surplusPlates });
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

// ...
