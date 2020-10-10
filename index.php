<!DOCTYPE html>
<html>
<head>
	<title>Welcome to Guitarly</title>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
	<link rel="stylesheet" type="text/css" href="assets/css/main.css">
	
</head>
<body>

<div class="nav">
	<div class="container">
		<h2>Logo</h2>
	<ul>
		<li><a href="./views/login.html">login</a></li>
		<li><a href="./views/register.html">register</a></li>
		<li>
			<form action="./includes/logout.inc.php" method="post" >
                <button type="submit" name="logout-submit">logout</button>
            </form>
		</li>
	</ul>
	</div>
	
</div>


<div class="hero">
	<img src="guitar.jpg" alt="">
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
			<img src="./images/icon/small-guitar.png" alt="">
		</div>
		<div class="feature-main">
			<div class="metronome-content" data-aos="zoom-in" >
				<h3>Metronome</h3>
				<hr>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur deserunt optio cupiditate corporis ipsum, commodi ducimus ipsa! Cum, sed.</p>
			</div>
			<div class="metronome-img" data-aos="fade-left">
				<div class="img-holder"><img src="/guitar.jpg" alt=""></div>
			</div>

			<div class="tuner-img" data-aos="fade-right">
				<div class="img-holder"><img src="/guitar.jpg" alt=""></div>
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
				<div class="img-holder"><img src="/guitar.jpg" alt=""></div>
			</div>
		</div>				
	</div>	
</section>


<section id="about-us">
	<div class="contain">
		<div class="section-heading">
			<h2 style="color: var(--darkColor);">About Us</h2>
			<img src="./images/icon/secondary-small-guitar.png" alt="">
		</div>

		<div class="about-us-main">
			<div class="card" data-aos="zoom-in-up" data-aos-offset="300">
				<div class="card-img"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=822&q=80" alt=""></div>
				<div class="card-content">
					<h3>Rutuja <br> Jadhav</h3>
					<h4>TE IT B 55</h4>
					<div class="socials">
						<img src="/images/icon/github-brands.svg" alt="">
						<img src="/images/icon/linkedin-in-brands.svg" alt="">
					</div>
				</div>
			</div>
			<div class="card" data-aos="zoom-in-up" data-aos-offset="300" data-aos-delay="50">
				<div class="card-img"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=822&q=80" alt=""></div>
				<div class="card-content">
					<h3>Chinmay <br> Mhatre</h3>
					<h4>TE IT B 55</h4>
					<div class="socials">
						<img src="/images/icon/github-brands.svg" alt="">
						<img src="/images/icon/linkedin-in-brands.svg" alt="">
					</div>
				</div>
			</div>
			<div class="card" data-aos="zoom-in-up" data-aos-offset="300" data-aos-delay="100">
				<div class="card-img"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=822&q=80" alt=""></div>
				<div class="card-content">
					<h3>Prasad <br> Patil</h3>
					<h4>TE IT B 55</h4>
					<div class="socials">
						<img src="/images/icon/github-brands.svg" alt="">
						<img src="/images/icon/linkedin-in-brands.svg" alt="">
					</div>
				</div>
			</div>
			<div class="card" data-aos="zoom-in-up" data-aos-offset="300" data-aos-delay="150">
				<div class="card-img"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=822&q=80" alt=""></div>
				<div class="card-content">
					<h3>Zoheb <br> Waghu</h3>
					<h4>TE IT B 55</h4>
					<div class="socials">
						<img src="/images/icon/github-brands.svg" alt="">
						<img src="/images/icon/linkedin-in-brands.svg" alt="">
					</div>
				</div>
			</div>
			
			
		</div>

	</div>
</section>

<section id="map">

</section>


<section id="footer">
	<div class="form">
		
		<form action="#" class="footer-form">
			<label for="name">Name</label>
			<input type="text" class="footer-input">
			<label for="name">Email</label>
			<input type="text" class="footer-input">
			<label for="name">Message</label>
			<input type="text" class="footer-input">
			<button class="footer-submit">Submit</button>
		</form>
	</div>
	<div class="address">
		<h4>Address</h4>
		<p>1234, random location ,<br> random country , 400233</p>
	</div>
	<div class="phone">
		<h4>Phone</h4>
		<p style="text-align: center;" >100100100 <br> 900900900</p>
	</div>
	<div class="social-media">
		<h4>Socials</h4>
		<p>@rutujaa_02</p>
	</div>
</section>






<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
  AOS.init({
	offset: 230
  });
</script>

</body>
</html>