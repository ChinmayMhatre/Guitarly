<?php


function emptyinputsignup($email,$username,$pwd,$pwd1){
    $result =null;
    if(empty($email) || empty($username) ||empty($pwd) ||empty($pwd1) ){
        $result = true ;
    }else{
        $result = false;
    }

    return $result;
}

function invalidusername($username){
    $result =null;
    if(!preg_match("/^[a-zA-Z-' ]*$/",$username) ){
        $result = true ;
    }else{
        $result = false;
    }
    return $result;
}
function invalidemail($email){
    $result =null;
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $result = true ;
    }else{
        $result = false;
    }
    return $result;
}
function passwordmismatch($pwd,$pwd1){
    $result =null;
    if($pwd !== $pwd1){
        $result = true ;
    }else{
        $result = false;
    }
    return $result;
}
function emailexists($con,$email){
    $sql= "SELECT * FROM  users WHERE email='$email';";
    $res = $con->query($sql);
    if ($res->num_rows > 0) {
        // output data of each row
         while($row = $res->fetch_assoc()) {
            return $row;
         }
      } else {
        $result =false;
        return $result;
      }
}

function createuser($con,$email,$username,$pwd){
    $hpwd=password_hash($pwd,PASSWORD_DEFAULT);
    $sql= "INSERT INTO users (username,email,user_password) VALUES ('$username','$email','$hpwd');";
    
    if ($con->query($sql) === TRUE) {
        header("location:../views/login.php?error=none");
        exit();
      } else {
        echo $con->error;
        // header("location:../views/register.php?error=$username");
        exit();
      }
}

function emptyinputlogin($email,$pwd){
    $result =null;
    if(empty($email)  ||empty($pwd)  ){
        $result = true ;
    }else{
        $result = false;
    }

    return $result;
}

function  loginuser($con,$email,$pwd){
    $emailexists=emailexists($con,$email);

    if($emailexists == false){
        header("location:../views/login.php?error=emailnotfound");
        exit();
    }
    $hpwd = $emailexists['user_password'];
    $checkpwd = password_verify($pwd,$hpwd);

    if($checkpwd == false){
        header("location:../views/login.php?error=wrongpassword");
        exit();
    }
    else if($checkpwd == true){
        session_start();
        $_SESSION["user_email"]=$emailexists['email'];
        $_SESSION["user_name"]=$emailexists['username'];
        $_SESSION["user_id"]=$emailexists['id'];
        header("location:../views/home.php?error=none");
        exit();
    }
}


