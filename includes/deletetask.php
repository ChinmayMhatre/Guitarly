<?php

require_once 'connect.inc.php';

session_start();

$output = array();
$delname=$_GET['delname'];
$useremail = $_SESSION["user_email"];
$username = $_SESSION["user_name"];
$uid = $_SESSION["user_id"];

echo $delname;

$sql = "DELETE FROM tasks WHERE user_id='$uid'AND task_name='$delname'";

if ($con->query($sql) === TRUE) {
  echo "Record deleted successfully";
  exit();
} else {
  echo "Error deleting record: " . $con->error;
  exit();
}

$con->close();
