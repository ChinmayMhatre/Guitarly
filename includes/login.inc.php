<?php
if(isset($_POST["login-submit"])){
    $email = $_POST["email"];
    $pwd = $_POST["password"];
    require_once 'connect.inc.php';
    require_once 'functions.inc.php';
    if(emptyinputlogin($email,$pwd) !== false){
        header("location:../views/login.php?error=emptyinput");
        exit();
    }
    if(invalidemail($email) !== false){
        header("location:../views/login.php?error=invalidemail");
        exit();
    }

    loginuser($con,$email,$pwd);


}else{
    header("location:../views/login.php");
}





