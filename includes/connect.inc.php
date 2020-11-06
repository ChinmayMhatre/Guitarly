<?php

$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "guitarly";

$con = mysqli_connect($servername,$dbusername,$dbpassword,$dbname);

if(!$con){
    die("Connection Failed".mysqli_connect_error());
}