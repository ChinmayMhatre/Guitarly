
//? =====================================
// * Tabs
//? =====================================
const tabs = document.querySelectorAll("[data-tab-target]");
const tabcontents = document.querySelectorAll("[data-tab-content]");

tabs.forEach(tab=>{
    tab.addEventListener("click",()=>{
        const target = document.querySelector(tab.dataset.tabTarget);
        tabcontents.forEach(content=>{
            content.classList.remove('active');
        })
        target.classList.add('active');        
        tabs.forEach(tab=>{
            tab.classList.remove('active');
        })
        tab.classList.add('active');        
        target.classList.add('active');        
    })
})


//? =====================================
// * Task
//? =====================================


function taskUpdate(){
    var tname = document.querySelector('#tname').value;
    var time =document.querySelector('#time').value;
    var tasks = document.querySelectorAll('.task');
    var tasknum = 0;

    tasks.forEach(task=>{
        tasknum++;
        
    })
    console.log(tasknum);
    if (time == "" || tname == "" ){
        alert("please enter both time and name");
        
      }
    else if(time>30){
        alert("time cannot be greater than 30 min");
    }
    else if(tasknum>=7){
        alert("maximum tasks reached");
    }
    else{
        
            var obj = {tname: tname,ttime:time};
            console.log(tname);
            var taskJSON = JSON.stringify(obj);

            var txt ="";
            var xmlhttp=new XMLHttpRequest();
            xmlhttp.onreadystatechange=function() {
              if (this.readyState==4 && this.status==200) {
                  myObj = this.responseText; 
                  console.log(myObj);
                  displayList();

               
                
              }
            }
            xmlhttp.open("POST","../includes/updatetasks.php",true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
            console.log(taskJSON);
            xmlhttp.send("task=" + taskJSON ); 
          
    }  
}

function displayList(){
    
    var tasks = document.querySelectorAll('.task');
    var tasklist = document.querySelector('#task-list');
   
   
   

    var txt ="";
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
          
          myObj = JSON.parse(this.responseText); 
        //    console.log(typeof myObj);
        //   alert(myObj);
           if (myObj.length === 0) { 
               alert("wrong");
              txt = "No details found"
          }
          else{
            while (tasklist.hasChildNodes()) {  
                tasklist.removeChild(tasklist.firstChild);
              }
           for (x=0;x<myObj.length;x++) { 
               var task =document.createElement("DIV");
               task.classList.add('task');
               var taskname =document.createElement("DIV");
               taskname.classList.add('task-name');
               taskname.appendChild(document.createTextNode(myObj[x].task_name))
               
               task.appendChild(taskname);
               
               var tasktime =document.createElement("DIV");
               tasktime.classList.add('task-time');
               var span =document.createElement('SPAN');
               span.appendChild(document.createTextNode(myObj[x].task_time));
               
               tasktime.appendChild(span);
               tasktime.appendChild(document.createTextNode(" Min"));
               task.appendChild(tasktime);
               
               var taskdelete =document.createElement("BUTTON");
               taskdelete.classList.add('task-delete');
               taskdelete.appendChild(document.createTextNode('Delete'));
               task.appendChild(taskdelete);
               
               
            tasklist.appendChild(task);
            //    console.log(myObj[x]);
           } 
           }
        //  document.getElementById("userDetail").innerHTML = txt; 
        
      }
    }
    xmlhttp.open("GET","../includes/showlist.php",true);

    
    xmlhttp.send(); 
}

var deletebuttons = document.querySelectorAll('.task-delete');





function DeleteTask(){
    alert('clicked');
}



//? =====================================
// * timer + listloading
//? =====================================


document.addEventListener("DOMContentLoaded",()=>{
    displayList();
    const timeLeftDisplay = document.querySelector('#time-left');
    const startBtn = document.querySelector('#start-button');
    var interval =-1 ;
    timeLeft=70;
    timeLeftDisplay.innerHTML = timeLeft;

    function convertseconds(s){
        var min = Math.floor(s / 60);
        var sec = s % 60; // s%60 gives the remainder which are the seconds
        return min +" : "+sec;
    }

        function startcd(){
            
            timeLeft-=1;
           if (timeLeft<=0){
            clearInterval(timeLeft = 0);
           }
           var t = convertseconds(timeLeft);
            timeLeftDisplay.innerHTML=t;
            
        }
        
        
  
    startBtn.addEventListener("click",function(){
        if(interval ==-1){
            interval = setInterval(startcd,1000)
        }else{
            clearInterval(interval);
            interval = -1;
        }
    });

    
    
  
})


