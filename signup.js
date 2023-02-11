const express = require('express');
const port = 3000;
const app = express();
const bodyParser =require('body-parser');
const logins=require("./signups")
app.use(bodyParser.json());

//UrlEncoded Data Parsing
app.use(bodyParser.json());
const ab={
    'id':"1",
    'username':"kapil chhatkuli",
    'password':"kapil12"
}
app.post('/login-form',(req,res)=>{
    console.log(req.params); 
   // console.log("login");
    logins.login(ab);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})