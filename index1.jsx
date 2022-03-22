const promiseobj= new Promise((resolve,reject)=>{
    const randomNumber=Math.floor(Math.random()*10);
    if(randomNumber%2===0){
        resolve("we get the burger")
    }else{
        reject("OOps! we dont get burger")
    }
    
});
promiseobj.then((massage)=>{
    console.log(massage)
})
.then((err)=>{
    console.log(err)
})