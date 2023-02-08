const httpStatus = require("http-status");

((sumCalclate)=>{
    sumCalclate.sum=function(a,b){
        setTimeout(()=>{
            console.log("hey");
        },5000);
        //return a+b;
        
    }
    sumCalclate.login=async(request)=>{
        const isvalid=await sumCalclate.loginValidation(request);
        // if(isvalid==false){
        //     return{
        //        status:httpStatus.BAD_GATEWAY,message:"user name is required" 

        //     }
        // }
        if(isvalid){
            console.log("right login")
        }
        else{
            console.log("not right");
        }
    }
    sumCalclate.loginValidation=(request)=>{
        if(request.username=="kapil"){
            return true
        }
        return false
    }
})(module.exports)