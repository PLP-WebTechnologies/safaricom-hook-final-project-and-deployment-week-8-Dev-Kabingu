document.addEventListener("DOMContentLoaded", function() {
    function validateForm(form) {
        var requiredFields = ["name", "email", "phone", "message"];
        for (var i = 0; i < requiredFields.length; i++) {
            var field = form.querySelector("input[name=" + requiredFields[i] + "]") || form.querySelector("textarea[name=" + requiredFields[i] + "]");
            if (field && field.value.trim() === "") {
                alert("Please fill all the required fields.");
                return false;
            }
        }
        return true;
    }

    var messageForm = document.getElementById("messageForm");

    messageForm.addEventListener("submit", function(event) {
        if (!validateForm(messageForm)) {
            event.preventDefault();
        } else {
            alert("Your message has been sent!");
        }
    });
});


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h2>Login</h2>
    <form id="loginForm">
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
</body>
</html>
