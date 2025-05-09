<?php
// Database connection configuration

// Use environment variables if available
$servername = getenv('DB_HOST') ?: "localhost";
$username = getenv('DB_USER') ?: "hypermind_user"; // Replace with your database username
$password = getenv('DB_PASS') ?: "hypermind_password"; // Replace with your database password
$dbname = getenv('DB_NAME') ?: "hypermind_db"; // Replace with your database name

// For development/testing - if database connection fails, use file-based storage
$use_file_storage = false;
$backup_file = __DIR__ . '/../data/form_submissions.json';

// Create connection
$conn = @new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    error_log("Database connection failed: " . $conn->connect_error);
    $use_file_storage = true;
}

// Function to save data to file if database is unavailable
function saveToFile($data, $file) {
    // Create directory if it doesn't exist
    $dir = dirname($file);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }
    
    // Read existing data
    $existing = [];
    if (file_exists($file)) {
        $existing = json_decode(file_get_contents($file), true) ?: [];
    }
    
    // Add new data with timestamp
    $data['_saved_at'] = date('Y-m-d H:i:s');
    $existing[] = $data;
    
    // Save back to file
    return file_put_contents($file, json_encode($existing, JSON_PRETTY_PRINT));
}
?> 