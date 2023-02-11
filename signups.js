const httpStatus = require("http-status");

((signup)=>{
    signup.sign=function(a,b){
        setTimeout(()=>{
            console.log("login");
        },5000);
    }
    signup.login=async(request)=>{
         const isvalid=await signup.loginValidation(request);
 
         if(isvalid){
             console.log("right login in form");
         }
         else{
             console.log("not right login form");
         }
     }
     signup.loginValidation=(request)=>{
     if (request.id=='1'&& request.username=='kapil chhatkuli' && request.password == 'kapil12'){
             return true;
         }
         return false;
     }
 })(module.exports);