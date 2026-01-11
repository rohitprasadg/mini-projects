
const username = document.getElementById("username").value.trim();
const password = document.getElementById("password").value.trim();
const form =document.getElementById("form");
const email = document.getElementById("email").value.trim();
const password2 = document.getElementById("password2").value.trim();


// form.addEventListener("submit", function (e){
//     e.preventDefault();
//     validateForm();
// })

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error")

    errorElement.innerText = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success")

}


function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error")

    errorElement.innerText = "";
    inputGroup.classList.add("success");
    inputGroup.classList.remove("error")

}


function validateForm(){

    if(username===""){
        setError(username,"Username is Required.")
    }
    else{
        setSuccess(username)
    }

    if(email===""){
        setError(email,"Email is required.")
    }
    else if(!validateEmail(email)){
        setError(email,"Please enter a valid email.")
    }
    else{
        setSuccess(email)
    }
    
    if(password===""){
        setError(password,"Password is required.")
    }
    else if(password.length<8){
        setError(password,"Minimum 8 characters long.")
    }
    else{
        setSuccess(password)
    }

    
}

validateForm();


