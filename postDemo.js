const express = require('express');
const port = 3000;
const app = express();
const bodyParser =require('body-parser');
//const {sum}=require("./sumCalclate")
const logins=require("./sumCalclate")

//JSON parsing
app.use(bodyParser.json());

//UrlEncoded Data Parsing
app.use(bodyParser.json());

/*function sum(a,b){
 return (a+b);
}*/

app.post('/post-sum',(req,res)=>{
    /*let a = req.body.a;
    let b = req.body.b;
    const result = mult (parseInt(a),parseInt(b));
    console.log("Sum is:"+result);
    res.status(201).send(`sum is=${result}`);*/
   
    let sum1=sum(2,4);
    console.log(sum1);
    // console.log(a,b)
})
const ab={
    'username':"kapil",
    'address':"ktm"
}
app.post('/login',(req,res)=>{
    console.log(req.params); 
    logins.login(ab);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

