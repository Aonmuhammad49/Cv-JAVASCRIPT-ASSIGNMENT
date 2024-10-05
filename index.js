var Email = document.getElementById("email")
var Password = document.getElementById("password")
var emailerror = document.getElementById("emailerror")
var passworderror = document.getElementById("passworderror")
function submit() {
    if (Email.value === "" && Password.value==="") {
        emailerror.innerText = "Please Enter Your Email";
        passworderror.innerText="Please Enter Your Password"
    }
    
}
function checkdata(e,fieldName){
    if(fieldName=="email"){
        if (e.value != "") {
            emailerror.innerText = ""; 
        }
        else{
            emailerror.innerText = "Please Enter Your Email"; 
        }   
    }
    else if(fieldName=="password"){
        if (e.value != "") {
            passworderror.innerText = ""; 
        }
        else{
            passworderror.innerText = "Please Enter Your Email"; 
        }
    }
}
function 