//your JS code here. If required.
document.querySelector('#userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    
    let firstName = document.querySelector('input[name="firstName"]').value;
    let lastName = document.querySelector('input[name="lastName"]').value;
    let phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
    let email = document.querySelector('input[name="email"]').value;
    
    // Format the alert message
    let message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;
    
    // Show the alert with form data
    alert(message);
});
