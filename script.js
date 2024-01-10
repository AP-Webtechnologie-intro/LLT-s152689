  // Replace with your API endpoint
  const apiEndpoint1 = "https://api.open-meteo.com/v1/forecast?latitude=45.97707979521085&longitude=7.658537686974978&current=temperature_2m&timezone=auto&forecast_days=1";
  const apiEndpoint2 = "https://api.open-meteo.com/v1/forecast?latitude=46.08494880093317&longitude=7.301559026522801&current=temperature_2m&timezone=auto&forecast_days=1";
  const apiEndpoint3 = "https://api.open-meteo.com/v1/forecast?latitude=46.811111967569495&longitude=9.25594556322635&current=temperature_2m&timezone=auto&forecast_days=1";

  // Function to fetch data from the API and update the table cell
  const fetchAndUpdateTemperature = (apiEndpoint, elementId) => {
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        // Get the temperature value
        const temperature = data.current.temperature_2m;

        // Update the table cell with the temperature value
        document.getElementById(elementId).innerText = `Temperature: ${temperature} °C`;
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  // Fetch data for each location
  fetchAndUpdateTemperature(apiEndpoint1, "temperatureTd1");
  fetchAndUpdateTemperature(apiEndpoint2, "temperatureTd2");
  fetchAndUpdateTemperature(apiEndpoint3, "temperatureTd3");
