function fnameValidate(){
    let first_name=document.getElementById('firstname').value
    if(first_name==""){
        //call the function
        displayMsg("firstname must be required","fnameMsg","red")
        return false
    }
    else if(first_name.length<3){
        displayMsg("firstname must be more than 2 characters","fnameMsg","red")
        return false;
    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg("firstname contains only alphabets","fnameMsg","red")
        return false;
    }
    else{
        displayMsg("valid firstname","fnameMsg","green")
        return true
    }
}
function lnameValidate(){
    let last_name=document.getElementById('lastname').value
    if(last_name==""){
        //call the function
        displayMsg("lastname must be required","lnameMsg","red")
        return false
    }
    else if(last_name.length<3){
        displayMsg("lastname must be more than 2 characters","lnameMsg","red")
        return false;
    }
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg("lastname contains only alphabets","lnameMsg","red")
        return false;
    }
    else{
        displayMsg("valid lastname","lnameMsg","green")
        return true
    }
}
function emailValidate(){
    let email=document.getElementById('email').value
    if(email==""){
        //call the function
        displayMsg("email must be required","emailMsg","red")
        return false
    }
   else if(!email.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)+([a-z])+$/)){
       displayMsg("invalid email","emailMsg","red")
       return false

   }
    else{
        displayMsg("valid email","emailMsg","green")
        return true
    }
}
function passwordValidate(){
    let password=document.getElementById('password').value
    if(password==""){
        //call the function
        displayMsg("password must be required","passMsg","red")
        return false
    }
    else if(!password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&]).{9,40}$/)){
        displayMsg("must contains 9 characters,One Uppercase,one Lowercase,one digit and one special character","passMsg","red")
        return false
    }
    else{
        displayMsg("valid password","passMsg","green")
        return true
    }
}

function validForm(){
    if(fnameValidate()&&lnameValidate()&&emailValidate()&&passwordValidate()){
        return true;
    }
    return false;
}



function displayMsg(message,id,color){
    document.getElementById(id).innerHTML=message
    document.getElementById(id).style.color=color

}