

document.getElementById("form-validation").addEventListener('submit',(eventListener)=>
    {
        eventListener.preventDefault();

        let username=document.getElementById("username").value.trim();
        let email=document.getElementById("email").value.trim();
        let password=document.getElementById("password").value.trim();
        let confirmPassword=document.getElementById("cPassword").value.trim();
        

        let userNameError=document.getElementById("uName-error");
        let mailError=document.getElementById("mail-error");
        let passError= document.getElementById("password-error");
        let cPassError=document.getElementById("cPassword-error");

// this is regular expression
        let uNamePatterm = /^[A-Za-z]+ [A-Za-z]+$/; //Ex: Arjun Aadhith in using regular expression
        let mailpattern=/^[a-z0-9]+@+[a-z]{4,}\.[a-z]{3,}$/; //Ex: abc123@gmail.com in using regular expression
        

        let isValid=true;

        if(username === ""){
            userNameError.innerText="*Name is required";
            isValid=false;
        } 
        else if(!uNamePatterm.test(username)){
            userNameError.innerText="*Enter Your Full Name";
            isValid=false;

        }else if(uNamePatterm.test(username)){
            userNameError.innerText="";
            isValid=true
        }

        if(email === ""){
            mailError.innerText="*Email is required";
            isValid=false;
        }
         else if(!mailpattern.test(email)){
            mailError.innerText="*Please enter a valid email address";
            isValid=false;

        }
        else if(mailpattern.test(email)){
            mailError.innerText="";
            isValid=true
        }


        if(password === ""){
            passError.innerText="*Password is required";
            isValid=false;
        } 
         else if(passError.length <3 || passError.length>9){
            passError.innerText="*Password must be between 4 and 8 characters";
            isValid=false;

        }
        else if(passError.length >3 || passError.length<9){
            passError.innerText="";
            isValid=true
        }
        

        if(confirmPassword === ""){
            cPassError.innerText="*Confirm Password is required";
            isValid=false;
        }
        else if(confirmPassword !== password){
            cPassError.innerText="*Passwords do not match";
            isValid=false;

        }
        else if(confirmPassword === password){
            cPassError.innerText="";
            isValid=true
        }


// alert popup
        if(isValid==true){
            alert(`Hi ${username}, Welcome to Our Website`)
        }
        
})

