function getFlightPrices() {
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
  
    // Clear previous results
    const flightPricesContainer = document.getElementById("flightPrices");
    flightPricesContainer.innerHTML = "";
  
    // Validate input
    if (!source || !destination || !date) {
      showError("Please fill in all fields");
      return;
    }
  
    // Make an API call to your backend with the source, destination, and date parameters
    fetchFlightPrices(source, destination, date)
      .then(response => {
        // Check for errors in the response
        if (!response.ok) {
          throw new Error("Failed to retrieve flight prices");
        }
        return response.json();
      })
      .then(data => {
        // Process the flight prices
        displayFlightPrices(data);
      })
      .catch(error => {
        showError(error.message);
      });
  }
  
  function fetchFlightPrices(source, destination, date) {
    // Make an API call to your backend server
    // Replace the URL with your actual API endpoint
    const url = `http://localhost:3000/flights?source=${source}&destination=${destination}&date=${date}`;
    return fetch(url);
  }
  
  function displayFlightPrices(flightPrices) {
    const flightPricesContainer = document.getElementById("flightPrices");
    flightPricesContainer.innerHTML = "";
  
    if (Object.keys(flightPrices).length === 0) {
      showError("No flight prices available");
      return;
    }
  
    for (const airline in flightPrices) {
      const price = flightPrices[airline];
  
      const airlineElement = document.createElement("p");
      airlineElement.textContent = `${airline}: ${price}`;
      flightPricesContainer.appendChild(airlineElement);
    }
  }
  
  function showError(message) {
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("error");
    errorContainer.textContent = message;
  
    const flightPricesContainer = document.getElementById("flightPrices");
    flightPricesContainer.innerHTML = "";
    flightPricesContainer.appendChild(errorContainer);
  }
  