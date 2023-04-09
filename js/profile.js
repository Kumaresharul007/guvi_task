$(document).ready(function() {
    $("form").submit(function(event) {

        event.preventDefault()

        var firstname = document.getElementById("input1").value
        var lastname = document.getElementById("input2").value
        var dob = document.getElementById("input3").value
        // var gender = document.getElementsByName("gender").value
        var ele = document.getElementsByName("gender");
        for (i=0; i<ele.length; i++) {
            if(ele[i].checked) {
                var gender = ele[i].value;
            }
        }
        var country = document.getElementById("input5").value
        var address = document.getElementById("input6").value
        var number = document.getElementById("input7").value

        //AJAX post request to the server

        $.post("php/profile.php", {firstname: firstname, lastname: lastname, dob: dob, gender: gender, country: country, address: address, number: number}, function(val) {
            if(val == "Data inserted!") {
                alert("Your profile has been created successfully!");
            }
        })
    })
})