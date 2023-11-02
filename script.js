const measurementId = `G-3YQV0CL029`;
const apiSecret = `TJRuaCk_QCKfPAX3df8U1g`;

  var sheet = SpreadsheetApp.openById(1kCMiZr1hI0wIJ5a4ndNRh96h3awata1L01v2UyRLX7I).getSheetByName(Sheet1);

//var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var city = sheet.getRange("C").getValues();
  var villa = sheet.getRange("D").getValues();

  // Fetch the client_id from a specific cell in the Google Sheet (e.g., A3)
  var client_id = sheet.getRange("A").getValue();

fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`, {
  method: "POST",
  body: JSON.stringify({
    "client_id": "XXXXXXXXXX.YYYYYYYYYY",
    "events": [{
      "name": "refund",
      "params": {
        "currency": "USD",
        "value": "9.99",
        "transaction_id": "ABC-123"
      }
    }]
  })
});

  // Log the response (optional)
  Logger.log(response.getContentText());
}
