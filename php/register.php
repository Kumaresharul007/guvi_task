<?php
    $hostname = "localhost:3307";
    $username = "root";
    $password = "admin";
    $database = "guvi_project";

    $conn = mysqli_connect($hostname, $username, $password, $database);
    if(!$conn){
        die("There is a problem in connecting a database!");
    }

    $user = $_POST["username"];
    $mail = $_POST["email"];
    $p = $_POST["pass"];
    $p2 = $_POST["pass2"];
    $err = false;

    if($p != $p2) {
        $err = true;
    }
    if(strlen($p) < 10) {
        $err = true;
    }
    if($err == false) {
        $hashed = md5($p2);
        $sql = "SELECT * FROM registration WHERE username = '$user'";
        $execution = mysqli_query($conn, $sql);
        $rows = mysqli_num_rows($execution);
        $sql2 = "SELECT * FROM registration WHERE email = '$mail'";
        $execution2 = mysqli_query($conn, $sql2);
        $rows2 = mysqli_num_rows($execution2);
        if($rows > 0 and $rows2 > 0){
            echo("Choose any other username and email!");
        }
        else if($rows > 0){
            echo("This username has already been taken!");
        }
        else if($rows2 > 0){
            echo("This email has already been taken!");
        }
        else {
            $sql3 = "INSERT INTO registration (username, email, pass, pass2) VALUES ('$user', '$mail', '$hashed', '$hashed')";
            if(mysqli_query($conn, $sql3)){
                echo("Account created successfully!");
                header("location: login.html");
            }
            else{
                echo("There is a problem in submitting the form!");
            }
        }
    }
?>