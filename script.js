function validateLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

    // Simple Email Format Check
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
        errorMsg.innerText = "❌ Please enter a valid email address!";
        return false; // Prevent form submission
    }

    // Password must be at least 6 characters
    if (password.length < 6) {
        errorMsg.innerText = "❌ Password must be at least 6 characters!";
        return false;
    }

    // If everything is okay
    errorMsg.innerText = "";
    alert("✅ Login successful!"); // Simulate successful login
    return true;
}