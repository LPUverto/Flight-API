const flightService = require('../services/flightService');

// const getFlightPrices = async (req, res) => {
//   try {
//     const { source, destination, date } = req.query;
//     // Assuming date is in the format 'DD Month YYYY'
//     const formattedDate = new Date(date).toISOString();

//     const flightPrices = await flightService.getFlightPrices(source, destination, formattedDate);

//     res.json(flightPrices);
//   } catch (error) {
//     console.error('Error retrieving flight prices:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// module.exports = {
//   getFlightPrices,
// };
// const flightService = require('../services/flightService');

const getFlightPrices = (req, res) => {
    const { source, destination, date } = req.query;
  
    // Mock flight prices based on source, destination, and date
    const flightPrices = {
      indigo: '₹1,614',
      airAsia: '₹1,869',
      vistara: '₹2,133',
    };
  
    res.json(flightPrices);
  };
  
  module.exports = {
    getFlightPrices,
  };
  