<?php header("Content-Type: application/json; charset=UTF-8"); ?>

<?php
session_start();
require_once 'connect.inc.php';

$uid = $_SESSION["user_id"];
//$emailid = "ralop@ertocp.com";
$output = array();

$sql = "SELECT * from progress where user_id ='$uid'";
//echo $sql;
$result = mysqli_query($con, $sql);
 while($row = mysqli_fetch_assoc($result)) {
	$output[]=$row;
  }
$sresult = json_encode($output);
echo $sresult;


