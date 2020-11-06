<!DOCTYPE html>
<html lang="en">
<head>
   
    <title>Login Page</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="../assets/css/login.css">


    <style>
    .social{
        display: flex;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .dot{
    margin-left: 20px;
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border: 2px  solid black;
    border-radius: 50px;
}
    </style>

</head>
<body>

    <div class="main-container">
        <div class="login-left">
            <div class="form-container">
                <h1>Sign in to Account </h1>
                <div class="social">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <p class="subtitle">Or use your email</p>
                <div id="success">
                <?php 
                        if(isset($_GET["error"])){
                            if($_GET["error"]=='none'){
                                echo "Account has been created sucessfully";
                            }
                        }
                    ?>
                </div>
                <div id="error" style="color: red;"><h2>
                    <?php 
                        if(isset($_GET["error"])){
                            if($_GET["error"]=='emptyinput'){
                                echo "All fields should be entered";
                            }
                            else if($_GET["error"]=='invalidemail'){
                                echo "Please enter a valid email";
                            }
                            else if($_GET["error"]=='emailnotfound'){
                                echo "email not found ";
                            }
                            else if($_GET["error"]=='wrongpassword'){
                                echo "incorrect password";
                            }
                        }
                    ?></h2>
                </div>

                <form action="../includes/login.inc.php" method="POST" class="signin-form">
                    <label for="email">Email</label>
                    <input type="email" required name="email" placeholder="example@123.com" required>
                    <label for="password" >Password</label>
                    <input type="password" placeholder="********" required name="password" required style="margin-bottom:20px ;" >
                    <button type="submit" name="login-submit">Sign In</button>
                </form>

                
            </div>     
            

        </div>
        <div class="login-right">
            <h1>Hi There!</h1>
            <h3>If you do not have <br> an account </h3>
            <a href="register.php">Create new account</a>
        </div>
    </div>


</body>
</html>