var form =document.getElementById("form1");


form.addEventListener("submit", function(event){
   event.preventDefault();
   const email=document.getElementById("Email");

   const regex_email=/\w+\.\w+@\w+\.\w+\.\w+ |\w+@\w+\.\w+/;

   const password=document.getElementById("Password");

   const regex_password= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&]{8,}$/;
   
   if(regex_email.test(email.value)){ 
       email.style.border="2px solid green";
   }
   else{
       email.style.border="2px solid red";
   }


   if(regex_password.test(password.value)){ 
       password.style.border="2px solid green";
   }
   else{
       password.style.border="2px solid red";
       
   }
});