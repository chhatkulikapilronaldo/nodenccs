const express = require('express')
const app = express()
const port = 3006

function sum(a,b){
  return a+b;
}

//app.get('/get-hello/user/:userid', (req, res) => {
  app.get('/sum', (req, res) => {
  //console.log(req.params);
  let a=req.query.a
  let b=req.query.b
let result=sum(parseInt(a),parseInt(b))
 res.status(201).send(`sum=${result}`);
 //res.status(201).send("hello");
  console.log(result);
  //res.send('Hello hi')
 

})
app.post('/hi', (req, res) => {
  res.status(201).send("hi");
    //res.send('Hello ')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})