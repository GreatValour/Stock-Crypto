<?php
// Database connection settings
$servername = "192.168.100.166"; // Change to your database server name
$username = "root"; // Change to your database username
$password = "Hustle001@"; // Change to your database password
$database = "stock"; // Change to your database name

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT); // Hash the password
    $phone = $_POST["phone"];
    $country = $_POST["country"];
    
    // SQL query to insert data into the database
    $sql = "INSERT INTO users (username, fullname, email, password, phone, country) VALUES (?, ?, ?, ?, ?, ?)";
    
    // Prepare and bind the SQL statement
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $username, $fullname, $email, $password, $phone, $country);
    
    // Execute the SQL statement
    if ($stmt->execute()) {
        echo "Registration successful. You can now log in.";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    // Close the statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>
