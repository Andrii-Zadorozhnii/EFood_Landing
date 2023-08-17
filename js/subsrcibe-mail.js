document.addEventListener('DOMContentLoaded', function () {
    const subscribeButton = document.getElementById('subscribeButton');
    const emailInput = document.querySelector('.section-subscribe__mail-box__input');

    subscribeButton.addEventListener('click', function () {
        const email = emailInput.value;
        if (validateEmail(email)) {
            sendEmailToServer(email);
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        // Use a regular expression or other validation methods to validate the email
        // For example:
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function sendEmailToServer(email) {
        // Make an AJAX request to your backend server
        // You would replace the URL and method with your server's details
        fetch('https://yourbackend.com/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Email sent:', data);
            alert('Thank you for subscribing!');
            emailInput.value = ''; // Clear the input after successful submission
        })
        .catch(error => {
            console.error('Error sending email:', error);
            alert('An error occurred while subscribing. Please try again later.');
        });
    }
    
    // Clear input field when the input gets focus (optional)
    emailInput.addEventListener('focus', function () {
        emailInput.value = '';
    });
});
