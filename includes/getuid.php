<?php


session_start();
$uid = $_SESSION["user_id"];

echo $uid;