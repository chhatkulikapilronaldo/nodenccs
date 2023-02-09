(async () =>{
    const orders=[
       {fruits:"mango",qty:10},
       {fruits:"orange",qty:5}
   ]
   
   //aysnc await demo
   async function addNewItem(){
     return new Promise((resolve,reject)=>{//for holding ,using for 3rd party api,also return response
       setTimeout(()=>{
           orders.push({fruits:"apple",qty:10},{fruits:"graps",qty:100});
           getOrderItem();
           // resolve(true);
       },6000);
     })
   }
   
   async function getOrderItem(){
       console.log("getOrderItems====",(orders));
   }
   
   const order =  addNewItem();
   if(order)
   await getOrderItem();
   // await gotForPay();
   })()