// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
  
    // Validate form inputs before proceeding
    if (validateForm()) {
      // Get form data
      const formData = new FormData(event.target);
      const userData = {};
      formData.forEach((value, key) => {
        userData[key] = value;
      });
  
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(userData));
  
      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'Your account has been created successfully!',
        confirmButtonText: 'OK',
      }).then(() => {
        // Redirect to the dashboard page
        window.location.href = 'login.php.html';
      });
    }
  }
  
  // Function to validate form inputs
  function validateForm() {
    const username = document.getElementById('username').value;
    const fullname = document.getElementById('username2').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const Cpassword = document.getElementById('Cpassword').value;
    const termsCheckbox = document.getElementById('terms');
  
    let isValid = true;
  
    // Validation for username
    if (!username.trim()) {
      isValid = false;
      document.getElementById('username-error').textContent = 'Username is required';
    } else {
      document.getElementById('username-error').textContent = '';
    }
  
    // Validation for fullname
    if (!fullname.trim()) {
      isValid = false;
      document.getElementById('username-error2').textContent = 'Fullname is required';
    } else {
      document.getElementById('username-error2').textContent = '';
    }
  
    // Validation for email
    if (!email.trim()) {
      isValid = false;
      document.getElementById('email-error').textContent = 'Email is required';
    } else {
      document.getElementById('email-error').textContent = '';
    }
  
    // Validation for password
    if (!password.trim()) {
      isValid = false;
      document.getElementById('pwd-error').textContent = 'Password is required';
    } else {
      document.getElementById('pwd-error').textContent = '';
    }
  
    // Validation for confirm password
    if (!Cpassword.trim()) {
      isValid = false;
      document.getElementById('pwd-error2').textContent = 'Confirm Password is required';
    } else if (password !== Cpassword) {
      isValid = false;
      document.getElementById('pwd-error2').textContent = 'Passwords do not match';
    } else {
      document.getElementById('pwd-error2').textContent = '';
    }
  
    // Validation for terms checkbox
    if (!termsCheckbox.checked) {
      isValid = false;
      document.getElementById('terms-feedback').textContent = 'You must agree to the terms of service';
    } else {
      document.getElementById('terms-feedback').textContent = '';
    }
  
    return isValid;
  }
  
  // Add event listener to the form submit button
  const registerForm = document.getElementById('signup_form');
  registerForm.addEventListener('submit', handleFormSubmission);
  