<?php
// Include database configuration
require_once 'config.php';

// Include Google Sheets API functionality
require_once 'google_sheets_api.php';

// Set headers to allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Get POST data
$post_data = json_decode(file_get_contents("php://input"), true);

// If no POST data, try $_POST
if (empty($post_data)) {
    $post_data = $_POST;
}

// Check if any data was received
if (empty($post_data)) {
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit;
}

// Current date and time
$submission_date = date("Y-m-d H:i:s");

// Get form type (if available)
$form_type = isset($post_data['form_type']) ? $post_data['form_type'] : "unknown";

// Prepare other data
$email = isset($post_data['email']) ? $post_data['email'] : "";
$name = isset($post_data['name']) ? $post_data['name'] : "";
$company = isset($post_data['company']) ? $post_data['company'] : "";
$position = isset($post_data['position']) ? $post_data['position'] : "";
$message = isset($post_data['message']) ? $post_data['message'] : "";
$page_url = isset($post_data['page_url']) ? $post_data['page_url'] : "";

// Convert all data to JSON for storage
$all_data = json_encode($post_data);

// Track if save was successful
$save_successful = false;

// Save to database if connection is available
if (!$use_file_storage) {
    try {
        // Prepare SQL statement
        $stmt = $conn->prepare("INSERT INTO submissions (form_type, email, name, company, position, message, page_url, all_data, submission_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssssss", $form_type, $email, $name, $company, $position, $message, $page_url, $all_data, $submission_date);
        
        // Execute statement
        if ($stmt->execute()) {
            $save_successful = true;
        } else {
            error_log("Database insertion failed: " . $stmt->error);
        }
        
        $stmt->close();
    } catch (Exception $e) {
        error_log("Exception during database save: " . $e->getMessage());
        // If database fails, fall back to file storage
        $use_file_storage = true;
    }
}

// If database failed or wasn't available, save to file
if ($use_file_storage) {
    $save_data = [
        'form_type' => $form_type,
        'email' => $email,
        'name' => $name,
        'company' => $company,
        'position' => $position,
        'message' => $message,
        'page_url' => $page_url,
        'all_data' => $post_data,
        'submission_date' => $submission_date
    ];
    
    if (saveToFile($save_data, $backup_file)) {
        $save_successful = true;
        error_log("Form data saved to file: {$backup_file}");
    } else {
        error_log("Failed to save form data to file");
    }
}

// If save was successful, send email notification
if ($save_successful) {
    // Send email notification
    $to = "contact@hypermind-ai.com";
    $subject = "New Form Submission: " . $form_type;
    
    $email_body = "New submission from: " . $email . "\n\n";
    
    if (!empty($name)) {
        $email_body .= "Name: " . $name . "\n";
    }
    
    if (!empty($company)) {
        $email_body .= "Company: " . $company . "\n";
    }
    
    if (!empty($position)) {
        $email_body .= "Position: " . $position . "\n";
    }
    
    if (!empty($message)) {
        $email_body .= "Message: " . $message . "\n";
    }
    
    $email_body .= "\nSubmission Time: " . $submission_date . "\n";
    $email_body .= "Form Type: " . $form_type . "\n";
    $email_body .= "Page URL: " . $page_url . "\n";
    
    // Headers
    $headers = "From: webmaster@hypermind-ai.com" . "\r\n";
    
    // Send email
    @mail($to, $subject, $email_body, $headers);
    
    // Add to Google Sheets if configured
    $google_sheets_result = false;
    if (function_exists('appendToGoogleSheets')) {
        $google_sheets_result = appendToGoogleSheets($post_data, $form_type);
    }
    
    // Append Google Sheets status to the response
    $response = [
        "status" => "success", 
        "message" => "Data saved successfully",
        "storage_type" => $use_file_storage ? "file" : "database",
        "google_sheets" => $google_sheets_result ? "Success" : "Not configured or failed"
    ];
    
    echo json_encode($response);
} else {
    echo json_encode([
        "status" => "error", 
        "message" => "Failed to save submission data",
        "fallback" => "Consider using the contact email directly: contact@hypermind-ai.com"
    ]);
}

// Close database connection if it was open
if (isset($conn) && !$use_file_storage) {
    $conn->close();
}
?> 