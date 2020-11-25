
<?php
	include_once "../includes/header.php";
?>


<div class="home-nav">
	
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
			
		</li>
	</ul>
	
</div>

<div id="home-main">
	<div id="home-list-section">
		<ul class="tabs">
			<li class="tab active " data-tab-target='#practise-routine'>Practise Routine</li>
			<li class="tab " data-tab-target='#edit-routine'>Edit Routine</li>
		</ul>
		<div class="tab-content">
			<div id="practise-routine"   data-tab-content class="active">
				<h3>Click on any tasks to start practising</h3>
				<div id="practise-list">
					<!-- <div class="practise"><div class="practise-name">Chord changes from c to d</div>
						<div class="practise-time"><span>10</span> Min</div>
					</div>
					<div class="practise"><div class="practise-name">Chord changes from c to d</div>
						<div class="practise-time"><span>10</span> Min</div>
					</div>
					<div class="practise"><div class="practise-name">Chord changes from c to d</div>
						<div class="practise-time"><span>10</span> Min</div>
					</div> -->
					 
				</div>
			</div>
			<div id="edit-routine" data-tab-content >
				<div class="inputs">
					<input type="text" name="taskname" id="tname" placeholder="Enter Task Name">
					<input type="number" name=time id="time" placeholder="Enter Minutes">
					<button onclick="taskUpdate()" type="submit">
						Add/Update
					</button>	
				</div>
				<div id="task-list">
					 <!-- <div class="task"><div class="task-name">Chord changes from c to d</div>
						<div class="task-time"><span>10</span> Min</div>
						<button class="task-delete">delete</button>
					</div>
					  -->
				</div>
			</div>
		</div>
	</div>
	<div id="home-tools-section">
		<h3 id="task-name">Task Name</h3>
		<div id="timer">
			<div ><h3>Time left</h3></div>
			<div  id="time-left"> 60 </div>
			<button id="start-button">start/stop</button>
		</div>

		
	</div>
</div>




<!-- <script src="js/visualization.js"></script> -->

<?php
	include_once "../includes/footer.php";
?>