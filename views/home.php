
<?php
	include_once "../includes/header.php";
?>
<style>
    body{
        background-color: black;
    }
</style>

<div class="nav">
	<div class="container">
		<h2>Logo</h2>
	<ul>
		<li><a href="./about.php">About Us</a></li>
		<li><a href="./contact.php">Contact  Us</a></li>
        <?php 
		if(isset( $_SESSION["user_email"])){
			echo '<li><a href="./home.php">home</a></li>';
			echo '<li><a href="../includes/logout.inc.php">Log out</a></li>';
		}else{
			echo '<li><a href="./login.php">login</a></li>';	
			echo '<li><a href="./register.php">register</a></li>';	
		}
		?>
		<li>
			<!-- <form action="./includes/logout.inc.php" method="post" >
                <button type="submit" name="logout-submit">logout</button>
            </form> -->
		</li>
	</ul>
	</div>
	
</div>


<?php
	include_once "../includes/footer.php";
?>