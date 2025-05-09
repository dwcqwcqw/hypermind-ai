<?php
/**
 * HyperMind AI - Import submissions from file storage
 * 
 * This script imports data from the file-based storage into the database
 * and optionally to Google Sheets. It's useful when submissions were saved
 * to file because the database was unavailable.
 */

// Include database configuration
require_once 'config.php';

// Include Google Sheets API functionality
require_once 'google_sheets_api.php';

// Configuration
$data_file = __DIR__ . '/../data/form_submissions.json';
$backup_file = __DIR__ . '/../data/form_submissions_imported.json';
$import_to_sheets = true; // Set to false to skip Google Sheets import

// Check if file exists
if (!file_exists($data_file)) {
    echo "Error: Data file not found at {$data_file}\n";
    exit(1);
}

// Read the file contents
$data = file_get_contents($data_file);
if (!$data) {
    echo "Error: Could not read data file\n";
    exit(1);
}

// Parse JSON
$submissions = json_decode($data, true);
if (!$submissions) {
    echo "Error: Invalid JSON data in file\n";
    exit(1);
}

echo "Found " . count($submissions) . " submissions to import\n";

// Counter for successful imports
$db_success = 0;
$sheets_success = 0;
$already_imported = 0;
$import_failed = 0;

// Check if database connection is available
$db_available = !$use_file_storage && isset($conn) && !$conn->connect_error;

if (!$db_available) {
    echo "Warning: Database connection not available. Will only import to Google Sheets.\n";
}

// Process each submission
foreach ($submissions as $index => $submission) {
    echo "Processing submission " . ($index + 1) . "... ";
    
    // Skip if already marked as imported
    if (isset($submission['_imported']) && $submission['_imported']) {
        echo "Already imported. Skipping.\n";
        $already_imported++;
        continue;
    }
    
    $form_type = $submission['form_type'] ?? 'unknown';
    $email = $submission['email'] ?? '';
    $name = $submission['name'] ?? '';
    $company = $submission['company'] ?? '';
    $position = $submission['position'] ?? '';
    $message = $submission['message'] ?? '';
    $page_url = $submission['page_url'] ?? '';
    $submission_date = $submission['submission_date'] ?? date('Y-m-d H:i:s');
    
    // Handle all_data field which might be an array or JSON string
    $all_data = $submission['all_data'] ?? [];
    if (is_array($all_data)) {
        $all_data = json_encode($all_data);
    }
    
    $db_imported = false;
    
    // Import to database if available
    if ($db_available) {
        try {
            // Prepare SQL statement
            $stmt = $conn->prepare("INSERT INTO submissions (form_type, email, name, company, position, message, page_url, all_data, submission_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("sssssssss", $form_type, $email, $name, $company, $position, $message, $page_url, $all_data, $submission_date);
            
            // Execute statement
            if ($stmt->execute()) {
                $db_imported = true;
                $db_success++;
                echo "DB: Success. ";
            } else {
                echo "DB: Failed (" . $stmt->error . "). ";
            }
            
            $stmt->close();
        } catch (Exception $e) {
            echo "DB: Exception (" . $e->getMessage() . "). ";
        }
    }
    
    // Import to Google Sheets if configured
    $sheets_imported = false;
    if ($import_to_sheets && function_exists('appendToGoogleSheets')) {
        try {
            // Prepare data for Google Sheets
            $sheets_data = [];
            
            // If all_data is a JSON string, convert it back to array
            if (is_string($all_data)) {
                $decoded = json_decode($all_data, true);
                if (is_array($decoded)) {
                    $sheets_data = $decoded;
                }
            }
            
            // Add individual fields if all_data couldn't be parsed
            if (empty($sheets_data)) {
                $sheets_data = [
                    'form_type' => $form_type,
                    'email' => $email,
                    'name' => $name,
                    'company' => $company,
                    'position' => $position,
                    'message' => $message,
                    'page_url' => $page_url,
                    'submission_date' => $submission_date
                ];
            }
            
            if (appendToGoogleSheets($sheets_data, $form_type)) {
                $sheets_imported = true;
                $sheets_success++;
                echo "Sheets: Success. ";
            } else {
                echo "Sheets: Failed. ";
            }
        } catch (Exception $e) {
            echo "Sheets: Exception (" . $e->getMessage() . "). ";
        }
    } else {
        echo "Sheets: Skipped. ";
    }
    
    // Mark as imported if either database or sheets import succeeded
    if ($db_imported || $sheets_imported) {
        $submissions[$index]['_imported'] = true;
        $submissions[$index]['_import_date'] = date('Y-m-d H:i:s');
        $submissions[$index]['_import_status'] = [
            'database' => $db_imported ? 'success' : 'failed',
            'sheets' => $sheets_imported ? 'success' : ($import_to_sheets ? 'failed' : 'skipped')
        ];
    } else {
        $import_failed++;
    }
    
    echo "\n";
}

// Save the updated file with import status
file_put_contents($data_file, json_encode($submissions, JSON_PRETTY_PRINT));

// Create a backup of the original file
copy($data_file, $backup_file);

// Summary
echo "\n--- Import Summary ---\n";
echo "Total submissions: " . count($submissions) . "\n";
echo "Already imported: " . $already_imported . "\n";
echo "Successfully imported to database: " . $db_success . "\n";
echo "Successfully imported to Google Sheets: " . $sheets_success . "\n";
echo "Failed to import: " . $import_failed . "\n";
echo "\nUpdated file saved to: " . $data_file . "\n";
echo "Backup saved to: " . $backup_file . "\n";

// Close database connection
if ($db_available) {
    $conn->close();
}

echo "\nImport process completed.\n";
?> 