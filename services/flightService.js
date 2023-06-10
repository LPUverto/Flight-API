const axios = require('axios');
const apiUtils = require('../utils/apiUtils');

// Rest of the code...


const getFlightPrices = async (source, destination, date) => {
  try {
    // Make an API call or fetch flight prices from the data source
    const response = await axios.get('https://api.example.com/flights', {
      params: {
        source,
        destination,
        date,
      },
    });

    // Extract relevant flight price data from the response
    const flightData = response.data;

    // Process and format the flight prices
    const formattedFlightPrices = apiUtils.formatFlightPrices(flightData);

    return formattedFlightPrices;
  } catch (error) {
    console.error('Error retrieving flight prices:', error);
    throw new Error('Failed to retrieve flight prices');
  }
};

module.exports = {
  getFlightPrices,
};
