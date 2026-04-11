const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;

    // Reset form
    form.reset();
    username = document.getElementById("username").value = "";
     email = document.getElementById("email").value = "";
     password = document.getElementById("password").value = "";
     age = document.getElementById("age").value = "";
    
    alert("Form submitted");
    console.log("Form submitted");
    
    // Set cookies
    document.cookie = `username=${username}; path=/; expires=Wed, 22 Apr 2026 00:00:00 UTC`;
    document.cookie = `email=${email}; path=/; expires=Wed, 22 Apr 2026 00:00:00 UTC`;
    document.cookie = `password=${password}; path=/; expires=Wed, 22 Apr 2026 00:00:00 UTC`;
    document.cookie = `age=${age}; path=/; expires=Wed, 22 Apr 2026 00:00:00 UTC`;
    
    
});
const button = document.getElementById("btn");
button.addEventListener("click", function() {
    form.dispatchEvent(new Event("submit"));
});

