
const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password= document.querySelector("#password")
const cpassword = document.querySelector("#cpassword")

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();

    }
})


function validateInputs(){
    const usernameval = username.value.trim()
    const emailval = email.value.trim()
    const passwordval= password.value.trim()
    const cpasswordval= cpassword.value.trim()
    let success = true;

    if(usernameval===''){
        success = false;
        setError(username,"Enter UserName")
    }else{
        setSuccess(username)
    }

    if( emailval===''){
        success = false;
        setError(email,'Enter Email')
    }
    else if(!validateEmail(emailval)){
        success = false;
        setError(email,'Enter correct email')
    }else{
        setSuccess(email)
    }

    if(passwordval===''){
        success = false;
        setError(password,'Enter Correct Password')
    }
    else if(passwordval.length<8){
        success = false;
        setError(password,'password must be ib 8 charcter')
    }
    else{
        setSuccess(password)
    }
    if(cpassword===''){
        success = false;
        setError(cpassword,'Enter confirm match password')
    }else if(cpasswordval!=passwordval){
        success = false;
        setError(cpassword,'password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText ='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
