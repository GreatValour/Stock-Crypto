<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $Cpassword = $_POST['Cpassword'];
    $phone = $_POST['phone'];
    $country = $_POST['country'];

    // Database connection
    $conn = new mysqli('localhost', 'root', 'VD7gLh(8e)Q(4m)7', 'test_now'); // Make sure to use the correct database name here
    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        // Prepare the SQL query
        $stmt = $conn->prepare("INSERT INTO registration (username, fullname, email, password, Cpassword, phone, country) VALUES (?, ?, ?, ?, ?, ?, ?)");

        // Bind parameters and execute the query
        $stmt->bind_param("sssssss", $username, $fullname, $email, $password, $Cpassword, $phone, $country);
        if ($stmt->execute()) {
            // Registration successful
            echo "Registration Successful!";
        } else {
            // Registration failed
            echo "Error: " . $stmt->error;
        }

        // Close the statement and the database connection
        $stmt->close();
        $conn->close();
    }
}
?>
