/**
 * HyperMind AI - Form Data Collector
 * Google Apps Script to receive form submissions and add them to Google Sheets
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Apps Script project at https://script.google.com/
 * 2. Copy and paste this entire code
 * 3. Replace SPREADSHEET_ID with your actual Google Sheet ID
 * 4. Deploy as a web app with the following settings:
 *    - Execute as: Me (your account)
 *    - Who has access: Anyone (even anonymous)
 * 5. Copy the web app URL and use it in your website
 * 
 * IMPORTANT NOTES:
 * - Make sure your Google Sheet exists and you have edit access
 * - Web app must be redeployed after changes
 * - Sheets are created automatically if they don't exist
 */

// CONFIG - REPLACE WITH YOUR SPREADSHEET ID
const SPREADSHEET_ID = "1dbgB-2MCGpL4KpGFFNBL09ntrVTB1JXL4aoVpDMmBDQ";

// Sheet names for different form types
const SHEETS = {
  contact_form: "Contact Form Submissions",
  contact_waitlist: "Contact Waitlist",
  newsletter_modal: "Newsletter Modal",
  newsletter_footer: "Newsletter Footer",  
  test: "Test Submissions",
  direct_test: "Direct Test Submissions",
  unknown: "Other Submissions"
};

// Log to spreadsheet for debugging
let DEBUG_MODE = true; // Set to false in production
const DEBUG_SHEET = "Debug Logs";

/**
 * Web app entry point - Handles POST requests from the website
 */
function doPost(e) {
  try {
    logDebug("Received POST request");
    logDebug("Content type: " + (e.contentType || "Not specified"));
    
    // Get form data based on content type
    let data;
    
    if (e.contentType === "application/json") {
      // Handle JSON data
      logDebug("Processing JSON data");
      try {
        data = JSON.parse(e.postData.contents);
        logDebug("Parsed JSON: " + JSON.stringify(data).substring(0, 200));
      } catch (jsonError) {
        logDebug("JSON parse error: " + jsonError.message);
        return createResponse("error", "Invalid JSON: " + jsonError.message);
      }
    } else {
      // Handle form data or URL parameters
      logDebug("Processing form data");
      data = e.parameter;
      logDebug("Form parameters: " + JSON.stringify(data).substring(0, 200));
    }
    
    // Log raw post data for debugging
    try {
      if (e.postData && e.postData.contents) {
        logDebug("Raw request body: " + e.postData.contents.substring(0, 200));
      }
    } catch (err) {
      logDebug("Couldn't log raw request body: " + err.message);
    }
    
    // Basic validation
    if (!data || Object.keys(data).length === 0) {
      logDebug("No data received");
      return createResponse("error", "No data received");
    }
    
    // If no form_type is provided, default to 'unknown'
    const formType = data.form_type || 'unknown';
    logDebug("Form type: " + formType);
    
    // Add timestamp if not provided
    const timestamp = data.timestamp || new Date().toISOString();
    
    // Prepare data row
    const rowData = [
      timestamp,
      data.email || '',
      data.name || '',
      data.company || '',
      data.position || '',
      data.message || '',
      data.page_url || '',
      formType
    ];
    
    logDebug("Prepared row data: " + rowData.join(", "));
    
    // Append data to the appropriate sheet
    try {
      const result = appendToSheet(rowData, formType);
      logDebug("Data successfully appended to sheet");
      
      // Return success response
      return createResponse("success", "Data added to Google Sheet");
    } catch (sheetError) {
      logDebug("Error appending to sheet: " + sheetError.message);
      return createResponse("error", "Failed to write to sheet: " + sheetError.message);
    }
    
  } catch (error) {
    // Log the error
    logDebug("Error processing form submission: " + error.message);
    
    // Return error response
    return createResponse("error", error.message);
  }
}

/**
 * Appends data to the appropriate sheet
 */
function appendToSheet(rowData, formType) {
  // Get the spreadsheet
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  if (!ss) {
    throw new Error("Spreadsheet not found. Check the SPREADSHEET_ID.");
  }
  
  // Determine which sheet to use
  let sheetName = SHEETS[formType] || SHEETS.unknown;
  logDebug("Selected sheet: " + sheetName);
  
  // Get or create the sheet
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    logDebug("Sheet doesn't exist, creating: " + sheetName);
    sheet = ss.insertSheet(sheetName);
    // Add header row
    sheet.appendRow([
      "Timestamp", 
      "Email", 
      "Name", 
      "Company", 
      "Position", 
      "Message", 
      "Page URL", 
      "Form Type"
    ]);
    
    // Format the header row
    sheet.getRange(1, 1, 1, 8).setFontWeight("bold").setBackground("#E8EAED");
    sheet.setFrozenRows(1);
  }
  
  // Append the data row
  logDebug("Appending row to " + sheetName);
  sheet.appendRow(rowData);
  
  return true;
}

/**
 * Create a standardized response
 */
function createResponse(status, message, data) {
  const response = {
    status: status,
    message: message,
    timestamp: new Date().toISOString()
  };
  
  if (data) {
    response.data = data;
  }
  
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Log debug information to a sheet
 */
function logDebug(message) {
  if (!DEBUG_MODE) return;
  
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let debugSheet = ss.getSheetByName(DEBUG_SHEET);
    
    // Create debug sheet if it doesn't exist
    if (!debugSheet) {
      debugSheet = ss.insertSheet(DEBUG_SHEET);
      debugSheet.appendRow(["Timestamp", "Message"]);
      debugSheet.getRange(1, 1, 1, 2).setFontWeight("bold").setBackground("#E8EAED");
      debugSheet.setFrozenRows(1);
    }
    
    // Add log entry
    debugSheet.appendRow([new Date().toISOString(), message]);
    
    // Keep only the last 500 log entries to avoid sheet getting too large
    const numRows = debugSheet.getLastRow();
    if (numRows > 500) {
      debugSheet.deleteRows(2, numRows - 500);
    }
  } catch (e) {
    // Can't log to sheet, fallback to console
    console.log("[DEBUG] " + message);
  }
}

/**
 * Web app entry point - Handles GET requests (for testing)
 */
function doGet(e) {
  const response = {
    status: "success",
    message: "The Google Apps Script is working! Use POST requests to submit form data.",
    time: new Date().toISOString(),
    sheets: SHEETS
  };
  
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
} 