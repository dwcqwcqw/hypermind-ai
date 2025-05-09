/**
 * Google Sheets Integration Initialization
 * This script initializes the Google Sheets integration for the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Default Google Sheets Web App URL
    const defaultSheetsUrl = "https://script.google.com/macros/s/AKfycbzNW-gGPVKtoJMAM7TvqbNuMUQNdxf1hKX5zLrrfYN6of70y7zfYuS4sFHFMVpE0GQF/exec";
    
    // Only set if not already set
    if (!localStorage.getItem('googleSheetsUrl')) {
        localStorage.setItem('googleSheetsUrl', defaultSheetsUrl);
        console.log('Google Sheets URL initialized');
    }
    
    // Add admin shortcut to set Google Sheets URL (Ctrl+Shift+G)
    const adminKeyCombo = (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'G') {
            const sheetsUrl = prompt('Enter Google Sheets Apps Script URL:', localStorage.getItem('googleSheetsUrl'));
            if (sheetsUrl) {
                localStorage.setItem('googleSheetsUrl', sheetsUrl);
                alert('Google Sheets URL saved successfully!');
            }
        }
    };
    
    document.addEventListener('keydown', adminKeyCombo);
    
    // Test connection to Google Sheets
    function testSheetsConnection() {
        const sheetsUrl = localStorage.getItem('googleSheetsUrl');
        if (!sheetsUrl) return;
        
        // Create a test FormData object
        const testData = new FormData();
        testData.append('form_type', 'connection_test');
        testData.append('timestamp', new Date().toISOString());
        
        // Attempt to connect
        fetch(sheetsUrl, {
            method: 'POST',
            body: testData,
            mode: 'no-cors'
        })
        .then(() => {
            console.log('Google Sheets connection test sent');
        })
        .catch(error => {
            console.error('Google Sheets connection test failed:', error);
        });
    }
    
    // Run the test
    setTimeout(testSheetsConnection, 2000);
}); 