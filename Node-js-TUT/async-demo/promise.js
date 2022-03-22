const p = new Promise(function (resolve,reject) {
    setTimeout(()=>{
        //resolve(1);
        reject(new Error("message"));
    },200);
    
});
p.then(result=>console.log("Result",result));
p.catch(err=>console.log("ERror",err.message))