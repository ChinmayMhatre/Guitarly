

  function formValidator_signup(){
    var email = document.querySelector("input[name='email']").value;
     var name = document.querySelector("input[name='username']").value;
     var pwd = document.querySelector("input[name='password']").value;
     var pwd1 = document.querySelector("input[name='password1']").value;
    flag=false;
    var validemail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    
    if (email == "" || name == "" ||pwd == ""||pwd1 == "" ){
      document.querySelector('.error').innerHTML ="All fields should be filled";
      // alert("All fields should be filled");
    }
    else if(pwd!==pwd1){
      document.querySelector('.error').innerHTML ="Passwords don't match";
    }
    else if(!(validemail.test(email))){
      document.querySelector('.error').innerHTML ="invalid email";
    }
    else {
      flag=true;
    }
    return flag;
  }


  function form_submit_signup(){
    console.log("123");
    if (formValidator_signup()==true){
      var form = document.querySelector(".signin-form");
      form.submit();
    }
  }