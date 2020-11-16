
<?php

require_once 'connect.inc.php';



session_start();

$output = array();
$useremail = $_SESSION["user_email"];
$username = $_SESSION["user_name"];
$uid = $_SESSION["user_id"];

$output = array();

    $sql = "SELECT * from tasks where user_id ='$uid'";
    $result = $con->query($sql);
    while($row = mysqli_fetch_assoc($result)) {
        $output[]=$row;
      }
    
    print_r(json_encode($output));
 

    mysqli_close($con);