$(document).ready(function() {
    $("form").submit(function(event) {

        event.preventDefault()

        var username = document.getElementById("input1").value
        var email = document.getElementById("input2").value
        var pass = document.getElementById("input3").value
        var pass2 = document.getElementById("input4").value
        var result = document.getElementById("message");
        var usererr = document.getElementById("usererr");
        var emailerr = document.getElementById("emailerr");

        localStorage.setItem("name", username);

        if(pass != pass2) {
            document.getElementById("pass2err").innerHTML = "The password should be same as entered above!";
        }
        else {
            document.getElementById("pass2err").innerHTML = "";
        }
        if(pass.length < 10) {
            document.getElementById("passerr").innerHTML = "The password should be atleast 10 characters!";
        }
        else {
            document.getElementById("passerr").innerHTML = "";
        }
        
        $.post("php/register.php", {username: username, email: email, pass: pass, pass2: pass2}, function(val) {
            if(val == "Account created successfully!") {
                result.innerHTML = val;
                result.style.backgroundColor = "lightgreen";
                result.style.color = "white";
                result.style.padding = "10px";
            }
            if(val == "Choose any other username and email!") {
                result.innerHTML = val;
                result.style.backgroundColor = "red";
                result.style.color = "white";
                result.style.padding = "10px";
            }
            if(val == "This username has already been taken!") {
                usererr.innerHTML = val;
                usererr.style.color = "red";
                result.style.backgroundColor = "none";
                result.style.padding = "0px"
                result.innerHTML = "";
            }
            else {
                usererr.innerHTML = "";
            }
            if(val == "This email has already been taken!") {
                emailerr.innerHTML = val;
                emailerr.style.color = "red";
                result.style.backgroundColor = "none";
                result.style.padding = "0px";
                result.innerHTML = "";
            }
            else {
                emailerr.innerHTML = "";
            }
            if(val == "There is a problem in submitting the form!") {
                result.innerHTML = val;
                result.style.backgroundColor = "red";
                result.style.color = "white";
                result.style.padding = "10px";
            }
        })
    })
})