const measurementId = 'G-3YQV0CL029';
const apiSecret = 'TJRuaCk_QCKfPAX3df8U1g';

var sheet = SpreadsheetApp.openById('1kCMiZr1hI0wIJ5a4ndNRh96h3awata1L01v2UyRLX7I').getSheetByName('Sheet1');

// Fetch the client_id from a specific cell in the Google Sheet (e.g., A1)
var client_id = sheet.getRange("A1").getValue();

// Fetch values from cells C1 and D1
var city = sheet.getRange("C1").getValue();
var villa = sheet.getRange("D1").getValue();

// Define the payload for the POST request
var payload = {
  client_id: client_id,
  events: [
    {
      name: 'test',
      params: {
        city: city,
        villa: villa,
      },
    },
  ],
};

// Send the POST request to the Google Analytics Measurement Protocol endpoint
fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`, {
  method: 'POST',
  contentType: 'application/json',
  payload: JSON.stringify(payload),
})
  .then(response => {
    // Handle the response here
    Logger.log(response.getContentText());
  })
  .catch(error => {
    // Handle errors here
    Logger.log('Error: ' + error);
  });
