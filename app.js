const express = require('express');
const flightController = require('./controllers/flightController');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Flight Prices API endpoint
app.get('/flights', flightController.getFlightPrices);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
