const { response } = require("express");

const order=[
    {fruits:"mango",qty:10},
    {fruits:"orange",qty:3}]

    function getOrderItems(){
        console.log("getOrderItems==",order)
    }

function addNewitem(callback){
    // setTimeout(()=>{
    //     order.push({fruits:"apple",qty:4})
    //     callback();
    // },6000);
    return new Promise((resolve,reject)=>{
        const err=false;
         setTimeout(()=>{
                 order.push({fruits:"apple",qty:4})
                 
                 if(err)
              reject();
              resolve(true);
               },6000);
    })
}
// function getOrderItems(){
//     console.log("getOrderItems==",order)
// }
addNewitem().then(response=>{
    console.log("response==")
    getOrderItems()
    getOrderItems();
}).catch((err)=>{
    console.log("err===")
});