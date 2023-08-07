< !--Your HTML form code here-- >

    <script>
  // Function to handle form submission
        function handleFormSubmission(event) {
            event.preventDefault();

        // Validate form inputs before proceeding
        if (validateForm()) {
      // Get form data
      const formData = new FormData(event.target);
        const userData = { };
      formData.forEach((value, key) => {
            userData[key] = value;
      });

        // Make a POST request to data.php to store the user data
        fetch('data.php', {
            method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Show success message
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful!',
                text: 'Your account has been created successfully!',
                confirmButtonText: 'OK',
            }).then(() => {
                // Redirect to the login page
                window.location.href = 'login.php.html';
            });
          } else {
            // Show error message
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: 'An error occurred while processing your registration. Please try again later.',
                confirmButtonText: 'OK',
            });
          }
        })
        .catch((error) => {
            // Show error message for any network or server-side issues
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: 'An error occurred while processing your registration. Please try again later.',
                confirmButtonText: 'OK',
            });
        });
    }
  }

    // Rest of your validateForm function and event listener code remains the same
    </script>
