// ...

const qr = require('qrcode');

// ...

// Set up the endpoint to generate QR code based on the dish list
app.get('/api/generate-qr-code', async (req, res) => {
    try {
        const dishList = req.query.dishes || '';
        const qrCodeDataUrl = await generateQRCode(dishList);
        res.send(qrCodeDataUrl);
    } catch (error) {
        console.error('Error in /api/generate-qr-code:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

async function generateQRCode(data) {
    try {
        const options = {
            errorCorrectionLevel: 'H',
            type: 'image/png',
            quality: 0.92,
            margin: 1,
        };

        return await qr.toDataURL(data, options);
    } catch (error) {
        throw error;
    }
}

// ...
