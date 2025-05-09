# Google Sheets Integration Troubleshooting Guide

This guide provides solutions for common issues with form submissions to Google Sheets.

## Problem: Form submissions not appearing in Google Sheets

### Possible Causes and Solutions:

#### 1. Incorrect Google Apps Script Web App URL

**Symptoms:**
- Forms submit without errors, but data doesn't appear in Google Sheets
- No logging or indication of problems in browser console

**Solutions:**
- Verify your Google Apps Script URL is correctly deployed as a web app
- Deploy your script with "Execute as: Me" and "Who has access: Anyone (even anonymous)"
- After any changes, you must create a NEW deployment (not update existing)
- Test your URL directly by visiting it in the browser - you should see a JSON response

#### 2. CORS (Cross-Origin Resource Sharing) Issues

**Symptoms:**
- Browser console shows CORS errors
- Network tab shows failed requests with status 0 or blocked

**Solutions:**
- The 'no-cors' mode in the fetch request is necessary but prevents seeing real errors
- Use our test_submission.html tool to diagnose issues
- If using 'no-cors' mode, you won't see detailed error messages due to browser security restrictions

#### 3. FormData Issues

**Symptoms:**
- FormData object not properly being processed on the server side
- Google Apps Script not detecting form fields

**Solutions:**
- Google Apps Script expects FormData to be in specific format
- Try using plain JSON submissions as an alternative
- Verify form fields match the expected names in your Google Apps Script

#### 4. Google Sheets Permission Issues

**Symptoms:**
- Form submissions attempted but nothing shows in sheets
- Google Apps Script logs might show permission errors (if you can access them)

**Solutions:**
- Make sure your Google Sheet ID is correct
- Ensure the Google account that deployed the Apps Script has edit access to the spreadsheet
- Check if the Sheet has any sharing restrictions

#### 5. Quota Limits

**Symptoms:**
- Submissions work sometimes but fail during high volume

**Solutions:**
- Google Apps Script has usage quotas (e.g., 20,000 calls/day)
- Implement batch processing for high-volume scenarios

## Debugging Steps

1. **Verify Script Deployment:**
   - Test the Apps Script URL in browser (should return JSON)
   - Check your spreadsheet ID in the script matches your actual spreadsheet

2. **Implement Better Logging:**
   - Use the enhanced google_apps_script_fixed.js provided in this repo
   - Enable DEBUG_MODE to log all requests to a separate sheet
   - Check the Debug Logs sheet for error messages

3. **Test With Simplified Tools:**
   - Use test_submission.html to directly test the integration
   - Try different submission methods (FormData vs. JSON)

4. **Check Browser Network Tab:**
   - Use Chrome DevTools Network tab to check request/response
   - Look for 'Preflight' OPTIONS requests that might be failing

## Common Fixes

### 1. Updated Google Apps Script Code

Replace your existing Apps Script with the improved version in `google_apps_script_fixed.js` which includes:
- Better error handling
- Detailed logging to a Debug sheet
- Support for both FormData and JSON formats
- Clear response formats

### 2. Fix Form Submission Code

Update your website's form submission code:

```javascript
// Improved form submission function
function submitToGoogleSheets(formType, data) {
    console.log(`Submitting ${formType} form:`, data);
    
    // Get Google Sheets URL
    const googleSheetsUrl = localStorage.getItem('googleSheetsUrl');
    if (!googleSheetsUrl) {
        console.error('No Google Sheets URL configured');
        return Promise.reject(new Error('No Google Sheets URL configured'));
    }
    
    // Method 1: Using FormData (recommended for standard forms)
    const formData = new FormData();
    formData.append('form_type', formType);
    
    // Add all data fields
    for (const key in data) {
        formData.append(key, data[key]);
    }
    
    // Add metadata
    formData.append('page_url', window.location.href);
    formData.append('timestamp', new Date().toISOString());
    
    return fetch(googleSheetsUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Required for cross-origin but blocks seeing response
    })
    .then(() => {
        console.log(`${formType} form submitted successfully`);
        return true; // Note: with no-cors we can't actually confirm success
    })
    .catch(error => {
        console.error('Form submission error:', error);
        throw error; // Re-throw for caller to handle
    });
}
```

### 3. Deploy with CORS Handling

When deploying your Google Apps Script, add these lines to enable proper CORS:

```javascript
// Add at the start of your doPost function
function doPost(e) {
  // Set CORS headers for the preflight request
  if (e.parameter.type === 'preflight') {
    return ContentService.createTextOutput("")
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeader('Access-Control-Allow-Origin', '*')
      .setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT')
      .setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  
  // Normal request handling follows...
}
```

## Testing Your Integration

1. Visit test_submission.html in your browser
2. Enter your Google Apps Script Web App URL
3. Submit a test form
4. Check your Google Sheet to see if the data was recorded
5. If it wasn't, check the Debug Logs sheet for error messages

## Need More Help?

For issues not resolved by this guide:
1. Check Google Apps Script quotas and limitations
2. Review Google Apps Script execution logs in the Apps Script Editor
3. Try a different deployment option (e.g., as an API executable)
4. Consider alternative backends if Google Sheets integration continues to be problematic 