<?php 
session_start();
?>
<?php 
if(!isset($_SESSION['user_email'])){
    header("location:login.php");
    exit();
}
?>


<html>
<head>
  
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport" />
<script>
function getUser() {
  usrEmailID = document.getElementById("usrEmailID").value;
  if (usrEmailID == ""){
      return
  }
  var obj = {usrEmail: usrEmailID};
  console.log(usrEmailID);
  var userJSON = JSON.stringify(obj);

  var txt ="";
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
        myObj = JSON.parse(this.responseText); 
        console.log(myObj);
        if (myObj.length === 0) { 
            txt = "No details found"
        }
        else{
        for (x in myObj) { 
            txt += "User name is: "+ myObj[x].username + " <br> user id is: " +myObj[x].id +" <br> user email is: "+ myObj[x].email + "<br>"; 
        } 
        }
       document.getElementById("userDetail").innerHTML = txt; 
      
    }
  }
  xmlhttp.open("POST","../includes/admin.inc.php",true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
  console.log(userJSON);
  xmlhttp.send("user=" + userJSON ); 
}
</script>
<link rel="stylesheet" type="text/css" href="../assets/css/main.css">

</head>


<body>

<div class="home-nav">
	
		<img src="../assets/images/logo/logo-dark.svg" alt="" srcset="">
	<ul>
		
        <?php 
		if(isset( $_SESSION["user_email"])){
			echo '<li><a href="./adminhome.php">home</a></li>';
			echo '<li><a href="../includes/logout.inc.php">Log out</a></li>';
		}else{
			echo '<li><a href="./login.php">login</a></li>';	
			echo '<li><a href="./register.php">register</a></li>';	
		}
		?>
		<li>
			
		</li>
	</ul>
	
</div>


<div class="admin-wrapper">
<h3>Enter user email id </h3>
<input type="text" name="usrEmailID" id ="usrEmailID" >
<br/><br/>
<input type="button" class="button" onclick="getUser()" value="Get Details"/>


</div>

<div>
<p id="userDetail"></p> 
<div>


</body>
</html>