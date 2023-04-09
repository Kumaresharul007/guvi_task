<?php
    $hostname = "localhost:3307";
    $username = "root";
    $password = "admin";
    $database = "guvi_project";

    $conn = mysqli_connect($hostname, $username, $password, $database);
    if(!$conn){
        die("There is a problem in connecting a database!");
    }

    $mail = $_POST["email"];
    $p = $_POST["pass"];

    $hashed = md5($p);
    $sql = "SELECT * FROM registration WHERE email = '$mail' AND pass = '$hashed'";
    $execution = mysqli_query($conn, $sql);
    $rows = mysqli_num_rows($execution);
    if($rows == 1) {
        echo("logged in successfully!");
        header("location: profile.html");
    }
    else {
        echo("Invalid username and password!");
    }
?>