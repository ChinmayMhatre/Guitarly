<?php
 include_once "../includes/header.php"
?>



<section id="about-us">
	<div class="contain">
		<div class="section-heading">
			<h2 style="color: var(--darkColor);">About Us</h2>
			<img src="../assets/images/icon/secondary-small-guitar.png" alt="">
		</div>

		<div class="about-us-main">
			<div class="card" data-aos="zoom-in-up" data-aos-offset="300">
				<div class="card-img"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=822&q=80" alt=""></div>
				<div class="card-content">
					<h3>Rutuja <br> Jadhav</h3>
					<h4>TE IT B 55</h4>
					<div class="socials">
						<img src="../assets/images/icon/github-brands.svg" alt="">
						<img src="../assets/images/icon/linkedin-in-brands.svg" alt="">
					</div>
				</div>
			</div>
			<div class="card" data-aos="zoom-in-up" data-aos-offset="300" data-aos-delay="50">
				<div class="card-img"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=822&q=80" alt=""></div>
				<div class="card-content">
					<h3>Chinmay <br> Mhatre</h3>
					<h4>TE IT B 55</h4>
					<div class="socials">
						<img src="../assets/images/icon/github-brands.svg" alt="">
						<img src="../assets/images/icon/linkedin-in-brands.svg" alt="">
					</div>
				</div>
			</div>
			<div class="card" data-aos="zoom-in-up" data-aos-offset="300" data-aos-delay="100">
				<div class="card-img"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=822&q=80" alt=""></div>
				<div class="card-content">
					<h3>Prasad <br> Patil</h3>
					<h4>TE IT B 55</h4>
					<div class="socials">
						<img src="../assets/images/icon/github-brands.svg" alt="">
						<img src="../assets/images/icon/linkedin-in-brands.svg" alt="">
					</div>
				</div>
			</div>
			<div class="card" data-aos="zoom-in-up" data-aos-offset="300" data-aos-delay="150">
				<div class="card-img"><img src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=822&q=80" alt=""></div>
				<div class="card-content">
					<h3>Zoheb <br> Waghu</h3>
					<h4>TE IT B 55</h4>
					<div class="socials">
						<img src="../assets/images/icon/github-brands.svg" alt="">
						<img src="../assets/images/icon/linkedin-in-brands.svg" alt="">
					</div>
				</div>
			</div>
			
			
		</div>

	</div>
</section>

<section class="about-map">
	<h1 style="text-align: center; color:var(--primaryText); margin-bottom:40px">Map</h1>
	<div class="contain map-container">
		<iframe src="https://www.google.com/maps/d/embed?mid=1S1u52ffC6b0qj1qHrHrhnIzqouYUJjd9" style="margin: 0 auto;" width="940" height="480">
		</iframe>
	</div>
</section>



<section class="about-video">
	<h1 style="text-align: center; color:var(--darkColor); margin-bottom:40px">Video</h1>
	<div class="contain video-container">
		<div style="text-align:center"> 
			<video id="video1" width="100%">
				<source  src="../assets/video/test.mp4" >
			</video>
			<br><br>
			<button class="video-button" onclick="playPause()">Play/Pause</button> 
			<button class="video-button" onclick="fullScreen()">Full Screen</button>
		</div> 
	</div>
</section>





<script> 
var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function fullScreen() { 
    if (myVideo.requestFullscreen) {
    myVideo.requestFullscreen();
  } else if (myVideo.mozRequestFullScreen) { /* Firefox */
    myVideo.mozRequestFullScreen();
  } else if (myVideo.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    myVideo.webkitRequestFullscreen();
  } else if (myVideo.msRequestFullscreen) { /* IE/Edge */
    myVideo.msRequestFullscreen();
  }
} 
</script> 







<?php
 include_once "../includes/footer.php"
?>
