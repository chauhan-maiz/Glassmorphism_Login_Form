// function validateForm(){
//     const uname = document.getElementById("uname").value;
//     const pwd = document.getElementById("pwd").value;

//     const nameErr = document.getElementById("uname-error").value;
//     const pwdErr = document.getElementById("pwd-error").value;

//     nameErr.textContent = "";
//     pwdErr.textContent = "";

//     let isValid = true;

//     if(uname === ""){
//         nameErr.textContent = "Please enter your name properly";
//         isValid = false;
//     }
//     if(pwd === ""||pwd.length < 6){
//         pwdErr.textContent = "Please enter a password with at least 6 characters";
//         isValid = false;
//     }
//     if(isValid){
//         alert("Form submitted successfully...")
//     }else{
//         return false;
//     }


// }

const form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const uName = document.getElementById("uname").value;
    const pwd = document.getElementById("pwd").value;

    let isValid = true;
    document.getElementById("uname-error").textContent = "";
    document.getElementById("pwd-error").textContent = "";

    const nameRegex = /^[a-zA-Z]{1,30}$/;
    if (!nameRegex.test(fName)) {
        document.getElementById("uname-error").textContent =
            "First name must be 1-30 letters.";
        isValid = false;
    }

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!passRegex.test(pass)) {
        document.getElementById("pwd-error").textContent =
            "Password must have 8+ chars, 1 uppercase, 1 number, 1 special char.";
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
    }
});