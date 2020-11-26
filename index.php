
<?php
	include_once "./includes/header.php";
?>


<div class="nav">
	<div class="container">
		<img src="./assets/images/logo/logo-light.svg" alt="">
	<ul>
		<li><a href="./views/about.php">About</a></li>
		<li><a href="./views/contact.php">Contact</a></li>
				
		<?php 
		if(isset( $_SESSION["user_email"])){
			
			echo '<li><a href="./includes/logout.inc.php">Log out</a></li>';
		}else{
			echo '<li><a href="./views/login.php">login</a></li>';	
			echo '<li><a href="./views/register.php">register</a></li>';	
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


<div class="hero">
	<img style="position: fixed;z-index:-1;" src="./assets/images/guitar.jpg" alt="">
	<div class="hero-content">
		<h1  data-aos="zoom-in" data-aos-duration="1000">Welcome to guitarly</h1>
		<h3  data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">Your journey to a better guitarist</h3>
		<?php 
		if(isset( $_SESSION["user_email"])){
			echo '<a href="./views/home.php"  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000"><b> Let\'s go</b></a>';
		}else{
			echo '<a href="./views/login.php"  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000"><b> Let\'s go</b></a>';
				
		}
		?>
		
	</div>	
</div>


<section id="features">
	<div class="contain">
		<div class="section-heading">
			<h2>Features</h2>
			<img src="./assets/images/icon/small-guitar.png" alt="">
		</div>
		<div class="feature-main">
			<div class="metronome-content" data-aos="zoom-in" >
				<h3>Metronome</h3>
				<hr>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur deserunt optio cupiditate corporis ipsum, commodi ducimus ipsa! Cum, sed.</p>
			</div>
			<div class="metronome-img" data-aos="fade-left">
				<div class="img-holder"><img src="./assets/images/guitar.jpg" alt=""></div>
			</div>

			<div class="tuner-img" data-aos="fade-right">
				<div class="img-holder"><img src="./assets/images/guitar.jpg" alt=""></div>
			</div>
			<div class="tuner-content "  data-aos="zoom-in">
				<h3>Tuner</h3>
				<hr>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur deserunt optio cupiditate corporis ipsum, commodi ducimus ipsa! Cum, sed.</p>
			</div>
			
			<div class="practisearea-content" data-aos="zoom-in">
				<h3>Practise Area</h3>
				<hr>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur deserunt optio cupiditate corporis ipsum, commodi ducimus ipsa! Cum, sed.</p>
			</div>
			<div class="practisearea-img" data-aos="fade-left">
				<div class="img-holder"><img src="./assets/images/guitar.jpg" alt=""></div>
			</div>
		</div>				
	</div>	
</section>



<section id="map">

</section>







<?php 
include_once "./includes/footer.php"
?>
