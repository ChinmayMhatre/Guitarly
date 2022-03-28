<?php

require_once 'connect.inc.php';

session_start();


$phptime=$_GET['phptime'];
$useremail = $_SESSION["user_email"];
$username = $_SESSION["user_name"];
$uid = $_SESSION["user_id"];



 $tdate=date('Y-m-d');

$select= "SELECT * FROM progress WHERE user_id='$uid' AND date='$tdate'";
$result = $con->query($select);
if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
        $update = "UPDATE progress SET total_time = total_time + $phptime WHERE date ='$tdate'";
        if ($con->query($update) === TRUE) {
            //echo "Record updated successfully";
            echo $tdate;
          } else {
            echo "Error updating record: " . $con->error;
          }
    }
}else{
    $sql = "INSERT INTO progress (user_id, date, total_time)
            VALUES ('$uid', '$tdate', '$phptime')" ;

    if ($con->query($sql) === TRUE) {
        echo strtotime('today 23:59');
    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }
 }



