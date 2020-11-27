
<?php
 include_once "../includes/header.php"
?>

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
    <img class="logo" src="logo.svg" alt="">
    
    <div class="main-container">
        <div class="register-left">
            <h1>Hi There!</h1>
            <h3>Already have <br> an account </h3>
            <a href="login.php" style="text-align: center;">Sign in</a>
        </div>
        <div class="register-right">
            <div class="form-container">
                <h1>Create an Account </h1>
                <div class="error" style="color: red;">
                    <?php 
                        if(isset($_GET["error"])){
                            if($_GET["error"]=='emptyinput'){
                                echo "All fields should be entered";
                            }
                            else if($_GET["error"]=='invalidusername'){
                                echo "Enter a valid username";
                            }
                            else if($_GET["error"]=='invalidemail'){
                                echo "Please enter a valid email";
                            }
                            else if($_GET["error"]=='passwordmismatch'){
                                echo "Passwords don't match";
                            }
                            else if($_GET["error"]=='emailexists'){
                                echo "This email has already been registered";
                            }
                        }
                    ?>
                </div>

                <!-- <div class="social">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <p class="subtitle">Or use your email</p> -->


                <form  class="signin-form" action="../includes/signup.inc.php"  method="POST">
                    <label for="email">Email</label>
                    <input required name="email" type="email" placeholder="example@abc.com">
                    
                    <label for="name">Name</label>
                    <input required  type="text" placeholder="John Doe" name="username" >
                    
                    <label for="password">Password</label>
                    <input required type="password" name="password" placeholder="********" style="margin-bottom:20px ;" >
                   
                    <label for="password1">re-enter Password</label>
                    <input required type="password" name="password1" placeholder="********" style="margin-bottom:20px ;" >

                    <button type="submit" onclick="form_submit_signup()" name="register-submit">Sign up</button>
                </form>

                
            </div>     
            

        </div>
        
    </div>


    

<?php
 include_once "../includes/footer.php"
?>