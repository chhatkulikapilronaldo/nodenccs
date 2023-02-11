const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/form.html");
//   });
app.get('/form',function(req,res){
    res.sendFile('/form.html');
  });
let ab = [{
    "username": "kapil",
    "password": "kapil"
},
{
    "username": "hari",
    "password": "hari123"
}
]
app.post('/signup', function (req, res) {
    const name = req.body.name;
    const password = req.body.password;
    let output = true
    if (name == "" || password == "") {
        output = false
        res.send("Empty Field");
    }
    else if (password.length>=5) {
        output = false
        res.send("Invalid Password(Password should be at least 5 characters)");
    }
    if (output == true) {
        res.send("Succesful signup");
    }
}
);
app.post('/login', function (req, res) {
    const user_name = req.body.username;
    const password = req.body.password;
    let output;
    ab.forEach(e => {
        if (user_name == e.username && password == e.password) {
            output = "Welcome " + user_name+ "!!";

        }
        else {
            output = "User " + user_name + " not recognized"
        }

    });
    res.send(output)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
