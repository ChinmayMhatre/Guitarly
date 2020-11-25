var timeLeft = "-";
var timeName = document.querySelector('#task-name');
var timeTime = document.querySelector('#task-time');
var taskcookie ={} ;
var uid;
var phptime ;



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
                  //console.log(myObj);
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

// 

function displayList(){
    
   // var tasks = document.querySelectorAll('.task');
    var tasklist = document.querySelector('#task-list');
    //var txt ="";
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
          console.log(this.responseText);
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
                        console.log(timeName.innerHTML);
                        if(timeName.innerHTML == e.target.parentElement.firstChild.innerText){
                            alert("you cannot do that");
                        }else{
                                var r = confirm("Are you sure you want to delete the task?");
                                if (r == true) {            
                                    var delname=e.target.parentElement.firstChild.innerText;
                                    var xmlhttp2=new XMLHttpRequest();
                                    xmlhttp2.onreadystatechange=function() {
                                    if (xmlhttp2.readyState==4 && xmlhttp2.status==200) {
                                        myObj2 = xmlhttp2.responseText; 
                                        //console.log(myObj2);
                                        location.reload();
                                        // displayList();
                                }}
                        xmlhttp2.open("GET","../includes/deletetask.php?delname="+delname,true);
                        xmlhttp2.send(); 

                  } else {
                       
                        }
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
                       // document.querySelector('#start-button').disabled=false;
                        items.forEach(itm=>{
                            itm.classList.remove('active');
                        })
                        item.classList.add('active');
                        timeName.innerText = item.firstChild.innerText;
                        //console.log(item.lastChild.firstChild.innerText);
                        timeLeft = Number(item.lastChild.firstChild.innerText) * 60;
                        
                        var timeLeftDisplay = document.querySelector('#time-left');
                        timeLeftDisplay.innerHTML = item.lastChild.firstChild.innerText ;
                        phptime =   timeLeftDisplay.innerHTML
                        // clearInterval(interval);


                    })
                })
                var getuid=new XMLHttpRequest();
                getuid.onreadystatechange=function() {
                if (this.readyState==4 && this.status==200) {
                   // console.log(this.responseText);
                    uid = this.responseText;
                    //console.log(uid);
                    var cooks =getCookie(uid);
                    cooks =  JSON.parse(cooks);
                    if(cooks){
                        console.log(cooks);
                        items.forEach((i)=>{
                            cooks.forEach((cook)=>{
                                if(cook == i.firstChild.innerHTML){
                                    i.classList.add("strike");
                                }
                            })
                            
                        })
                    }
                    
                }}
                getuid.open("GET","../includes/getuid.php",true);
                getuid.send(); 
                    

                

            }
        }
      
        }
        xmlhttp3.open("GET","../includes/showlist.php",true);
        xmlhttp3.send(); 
        // console.log(strtotime('today 23:59'));

    }




//? =====================================
// * timer + listloading
//? =====================================
displayList();
practiceList();


document.addEventListener("DOMContentLoaded",()=>{
    
    
    const startBtn = document.querySelector('#start-button');
    startBtn.innerHTML= "Start/Stop";
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
            
            
           if (timeLeft<=0){
   
            clearInterval(timeLeft = 0);
            startBtn.innerHTML= "Done ";
           }
            else{
                timeLeft-=1;
                var t = convertseconds(timeLeft);
                timeLeftDisplay.innerHTML=t;
                startBtn.innerHTML= "Start/Stop";    
            }
           
        }
        
      
  
    startBtn.addEventListener("click",function(){
        if(interval == -1){
            if(timeLeft=="-"){
                //startBtn.disabled = true;
                alert("select a task to continue");
            }
            else{
                interval = setInterval(startcd,1000);
            }
            
        }else{
            clearInterval(interval);
            if(timeLeft == 0){
                alert("completed");

            var uidreq=new XMLHttpRequest();
            uidreq.onreadystatechange=function() {
            if (this.readyState==4 && this.status==200) {
                console.log(this.responseText);
                uid = this.responseText;
                console.log(getCookie(uid)) ;
            mycookie = getCookie(uid);
            if(mycookie){//? adding to old cookie
               // console.log("inside",mycookie);
                values = JSON.parse(mycookie);
                values.every((value)=>{
                    //console.log(value); 
                    //console.log(timeName.innerHTML); 
                    if(value == timeName.innerHTML){
                        //! update in the database
                        console.log(phptime); 
                        var updatexml =new XMLHttpRequest();
                        updatexml.onreadystatechange=function() {
                        if (this.readyState==4 && this.status==200) {
                            console.log(this.responseText); 
                        }}
                        updatexml.open("GET","../includes/insertprogress.php?phptime="+phptime,true);
                        updatexml.send(); 
                         
                    }else{
                        //! add in the database
                        var updatexml1 =new XMLHttpRequest();
                        updatexml1.onreadystatechange=function() {
                        if (this.readyState==4 && this.status==200) {
                            console.log(this.responseText);
                            values.push(timeName.innerHTML);
                            setCookie(uid,JSON.stringify(values),1);
                            return false;
                             
                        }}
                        updatexml1.open("GET","../includes/insertprogress.php?phptime="+phptime,true);
                        updatexml1.send();
                        
                        
                    }
                })
                
                location.reload();
            }
            else{//?new cookie
                mycookie = [timeName.innerHTML];
                console.log(JSON.stringify(mycookie));
                
                var insertxml = new XMLHttpRequest();
                insertxml.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText) ;
                    setCookie(uid,JSON.stringify(mycookie),1);
                  }
                };
                insertxml.open("GET", "../includes/insertprogress.php?phptime="+phptime, true);
                insertxml.send();

                

               // console.log('outside',mycookie);
                location.reload();
                //!add in the database
            }
          
                
            }}
            uidreq.open("GET","../includes/getuid.php",true);
            uidreq.send(); 
            
            



                startBtn.innerHTML= "Start/Stop";
                timeLeft = "-";
                timeLeftDisplay.innerHTML=timeLeft;

            }
            interval = -1;
        }
    });

 
 
  
})




// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }
function setCookie(cname, cvalue, exdays) {
    var date = new Date();
    var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
    var expires = "expires="+ midnight.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


// function bake_cookie(name, value) {
//     var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
//     console.log(cookie);
//     document.cookie = cookie;
//   }


// function read_cookie(name) {
//     var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
//     result && (result = JSON.parse(result[1]));
//     return result;
//    }

//   function getCookie()  
//   {  
//       if( document.cookie.length!=0)  
//       {  
//   //Parsing JSON string to JSON object  
//       return JSON.parse(document.cookie);  

//           //alert("Name="+obj.name+" "+"Email="+obj.email+" "+"Course="+obj.course);  
//       }  
//       else  
//       {  
//           return taskcookie;
//       }  
//   }  


