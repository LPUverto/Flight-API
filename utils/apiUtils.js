const formatFlightPrices = (flightData) => {
    const formattedPrices = {};
  
    // Assuming flightData is an array of flight objects
    flightData.forEach((flight) => {
      const { airline, price } = flight;
      formattedPrices[airline] = formatPrice(price);
    });
  
    return formattedPrices;
  };
  
  const formatPrice = (price) => {
    // Assuming the price is in numeric format (e.g., 1614)
    const formattedPrice = `₹${price.toLocaleString('en-IN')}`;
  
    return formattedPrice;
  };
  
  module.exports = {
    formatFlightPrices,
  };