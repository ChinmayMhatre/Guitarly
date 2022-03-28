<?php
	include_once "../includes/header.php";
?>




<div class="home-nav">
	
	<a href="../index.php">	<img style="width:212px;" src="../assets/images/logo/logo-dark.svg" alt=""></a>
	<ul>
		<!-- <li><a href="./about.php">About Us</a></li>
		<li><a href="./contact.php">Contact  Us</a></li> -->
		<li><a href="./home.php">home</a></li>
        <?php 
		if(isset( $_SESSION["user_email"])){
			// echo '<li><a href="./home.php">home</a></li>';
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

    <div class="header">
        <div id="profile_uname"><?php echo $_SESSION['user_name']; ?></div>
    </div>
	<div class="chartcontainer">
        <canvas width="900px" style="padding-top:20px;"  id="myChart" ></canvas>
    </div>
    



<script>

var ctx = document.getElementById('myChart').getContext('2d');
var datearr = [];
var timearr = [];
 var progobj;
  var txt ="";
  var progxml=new XMLHttpRequest();
  progxml.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
        progobj = JSON.parse(this.responseText); 
        //console.log(progobj);
        if (progobj.length === 0) { 
            txt = "No details found"
        }
        else{
        for (x in progobj) {
            datearr.push(progobj[x].date);
            timearr.push(progobj[x].total_time);
             
            // txt += "User name is: "+ myObj[x].name + " and user id is: " +myObj[x].id +" and user email is: "+ myObj[x].email + "<br>"; 
            } 
        }
      // document.getElementById("userDetail").innerHTML = txt; 
    
            var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: datearr,
                datasets: [{
                    label: 'Total Time Practised in mins',
                    data: timearr,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                        
                    }]
                },
                responsive: false
            }
        });







    }

  }
  progxml.open("GET","../includes/getprogress.php",true);
  progxml.send(); 







</script>





<?php
	include_once "../includes/footer.php";
?>