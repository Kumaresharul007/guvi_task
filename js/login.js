$(document).ready(function() {
    $("form").submit(function(event) {

        event.preventDefault()

        var email = document.getElementById("input1").value
        var pass = document.getElementById("input2").value

        //AJAX post request to the server

        $.post("php/login.php", {email: email, pass: pass}, function(val) {
            if(val == "logged in successfully!") {
                localStorage.setItem("loggedIn", true);
            }
        })
    })
})