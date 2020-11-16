
<?php

require_once 'connect.inc.php';

$obj = json_decode($_POST["task"], false);

session_start();
$tname=$obj->tname;
$ttime=$obj->ttime;
$output = array();
$useremail = $_SESSION["user_email"];
$username = $_SESSION["user_name"];
$uid = $_SESSION["user_id"];



    $sql1 = "SELECT * from tasks where task_name ='$tname'";
    $result = $con->query($sql1);
    if ($result->num_rows > 0) {
    // output data of each row
    
        $update = "UPDATE tasks SET task_time='$ttime' WHERE task_name='$tname'";
        if ($con->query($update) === TRUE) {
            echo "Record updated successfully";
          } else {
            echo "Error updating record: " . $con->error;
          }
        echo "task Updated";
  } else {
    $insert = "INSERT INTO tasks (task_name,user_id,task_time) VALUES ('$tname','$uid',$ttime)";
    echo "inserted";
    if ($con->query($insert) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $con->error;
      }
  }
 



