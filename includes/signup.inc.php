<?php

if(isset($_POST["register-submit"])){
    $email = $_POST["email"];
    $username = $_POST["username"];
    $pwd = $_POST["password"];
    $pwd1 = $_POST["password1"];
    

    require_once 'connect.inc.php';
    require_once 'functions.inc.php';

    if(emptyinputsignup($email,$username,$pwd,$pwd1) !== false){
        header("location:../views/register.php?error=emptyinput");
        exit();
    }
    if(invalidusername($username) !== false){
        header("location:../views/register.php?error=invalidusername");
        exit();
    }
    if(invalidemail($email) !== false){
        header("location:../views/register.php?error=invalidemail");
        exit();
    }

    if(passwordmismatch($pwd,$pwd1) !== false){
        header("location:../views/register.php?error=passwordmismatch");
        exit();
    }
    if(emailexists($con,$email) !== false){
        header("location:../views/register.php?error=emailexists");
        exit();
    }


    createuser($con,$email,$username,$pwd);

}else{
    header("location:../views/register.php");
    exit();
}





