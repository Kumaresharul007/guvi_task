<?php 
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $dob = $_POST["dob"];
    $gender = $_POST["gender"];
    $country = $_POST["country"];
    $address = $_POST["address"];
    $number = $_POST["number"];

    require_once __DIR__ . '/vendor/autoload.php';
    $conn = new MongoDB\Driver\Manager("mongodb://localhost:27017");

    $db = $conn->profile_db;
    $table = $db->profile_table;
    $table->insertOne(["firstname" => $firstname,
                       "lastname" => $lastname,
                       "dob" => $dob,
                       "gender" => $gender,
                       "country" => $country,
                       "address" => $address,
                       "number" => $number]);
    echo("Data inserted!");

?>