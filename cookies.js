const form= document .querySelector("#form");
form.addEventListener("submit",function(e){
    e.preventdefault();
    const username =
    document.getElementById("username").value;
    const email =
    document.getElementById("email").value;
    const password =
    document.getElementById("password").value;
    const age =
    document.getElementById("age").value;

    document.cookie= `username= ${username};
    path=/; expires= wed, 22 april ;2026`
    document.cookie= `email= ${email};
    path=/; expires= wed, 22 april ;2026`
    document.cookie= `password= ${password};
    path=/; expires= wed, 22 april ;2026`
    document.cookie= `age= ${age};
    path/; expires= wed, 22 april ;2026`
});