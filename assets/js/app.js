var timeLeft;
var timeName = document.querySelector('#task-name');
var timeTime = document.querySelector('#task-time');




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
                  practiceList();

               
                
              }
            }
            xmlhttp.open("POST","../includes/updatetasks.php",true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
            console.log(taskJSON);
            xmlhttp.send("task=" + taskJSON ); 
          
    }  
}

function displayList(){
    
   // var tasks = document.querySelectorAll('.task');
    var tasklist = document.querySelector('#task-list');
    //var txt ="";
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
          
          myObj = JSON.parse(this.responseText);
           
        //    console.log(typeof myObj);
          //alert(myObj);
           if (myObj.length === 0) { 
                
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
        document.querySelector('#task-list').addEventListener('click',(e)=>{
            
            if(e.target.className == 'task-delete'){
                    
                    var r = confirm("Are you sure you want to delete the task?");
                    if (r == true) {            
                    var delname=e.target.parentElement.firstChild.innerText;
                    var xmlhttp2=new XMLHttpRequest();
                    xmlhttp2.onreadystatechange=function() {
                    if (xmlhttp2.readyState==4 && xmlhttp2.status==200) {
                        myObj2 = xmlhttp2.responseText; 
                        console.log(myObj2);
                        location.reload();
                        // displayList();

                    }}
                    xmlhttp2.open("GET","../includes/deletetask.php?delname="+delname,true);
                    xmlhttp2.send(); 

                  } else {
                       
                    }

                
            }
            
        })
      }
    }
    xmlhttp.open("GET","../includes/showlist.php",true);
    xmlhttp.send(); 
}



function practiceList(){
    var practiselist = document.querySelector('#practise-list');
    var xmlhttp3=new XMLHttpRequest();
    xmlhttp3.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
            myObj1 = JSON.parse(this.responseText);
            if (myObj1.length === 0) { 
                
            }else{
                while (practiselist.hasChildNodes()) {  
                    practiselist.removeChild(practiselist.firstChild);
                }
                for (x=0;x<myObj1.length;x++) {
                var practise =document.createElement("DIV");
                practise.classList.add('practise');
                var practisename =document.createElement("DIV");
                practisename.classList.add('practise-name');
                practisename.appendChild(document.createTextNode(myObj1[x].task_name))
            
                practise.appendChild(practisename);
       
                var practisetime =document.createElement("DIV");
                practisetime.classList.add('practise-time');
                var span =document.createElement('SPAN');
                span.appendChild(document.createTextNode(myObj1[x].task_time));
                
                practisetime.appendChild(span);
                practisetime.appendChild(document.createTextNode(" Min"));
                practise.appendChild(practisetime);

                practiselist.appendChild(practise);
                }
                var items = document.querySelectorAll('.practise');
                
                items.forEach(item=>{ 
                    item.classList.remove('active');
                    item.addEventListener('click',()=>{
                        items.forEach(itm=>{
                            itm.classList.remove('active');
                        })
                        item.classList.add('active');
                        timeName.innerText = item.firstChild.innerText;
                        console.log(item.lastChild.firstChild.innerText);
                        timeLeft = Number(item.lastChild.firstChild.innerText) * 60;
                        var timeLeftDisplay = document.querySelector('#time-left');
                        timeLeftDisplay.innerHTML = item.lastChild.firstChild.innerText ;
                        clearInterval(interval);
                    })
                })

            }
      }
        }
        xmlhttp3.open("GET","../includes/showlist.php",true);
        xmlhttp3.send(); 


    }




//? =====================================
// * timer + listloading
//? =====================================
displayList();
practiceList();

document.addEventListener("DOMContentLoaded",()=>{
    
    
    const startBtn = document.querySelector('#start-button');
    var interval =-1 ;
    // timeLeft=70;
    var timeLeftDisplay = document.querySelector('#time-left');
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


