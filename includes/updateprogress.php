<?php

require_once 'connect.inc.php';

session_start();


$phptime=$_GET['phptime'];
$useremail = $_SESSION["user_email"];
$username = $_SESSION["user_name"];
$uid = $_SESSION["user_id"];


echo date('Y-m-d');