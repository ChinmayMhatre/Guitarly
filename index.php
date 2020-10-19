
<?php
	include_once "./includes/header.php";
?>


<div class="nav">
	<div class="container">
		<h2>Logo</h2>
	<ul>
		<li><a href="./views/about.php">About Us</a></li>
		<li><a href="./views/login.html">login</a></li>
		<li><a href="./views/register.html">register</a></li>
		<li><a href="./views/contact.php">Contact  Us</a></li>
		<li>
			<!-- <form action="./includes/logout.inc.php" method="post" >
                <button type="submit" name="logout-submit">logout</button>
            </form> -->
		</li>
	</ul>
	</div>
	
</div>


<div class="hero">
	<img src="./assets/images/guitar.jpg" alt="">
	<div class="hero-content">
		<h1  data-aos="zoom-in" data-aos-duration="1000">Welcome to guitarly</h1>
		<h3  data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">Your journey to a better guitarist</h3>
		<a href="#"  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="2000"><b> Let's go</b></a>
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
