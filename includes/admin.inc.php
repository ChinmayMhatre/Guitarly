<?php header("Content-Type: application/json; charset=UTF-8"); ?>

<?php
    require_once 'connect.inc.php';
$obj = json_decode($_POST["user"], false);
//echo json_encode($obj->usrEmail);




$emailid=$obj->usrEmail;
//$emailid = "ralop@ertocp.com";
$output = array();

$sql = "SELECT * from users where email ='$emailid'";
//echo $sql;
$result = mysqli_query($con, $sql);
 while($row = mysqli_fetch_assoc($result)) {
	$output[]=$row;
  }
$sresult = json_encode($output);
echo $sresult;


mysqli_close($con);
?>