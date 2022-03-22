const { reject } = require("underscore");

console.log("before");
 getUser(1 ,function (user) {
     console.log("user",user);
   
   getRepsetary(user.getRepsetary,function (repos) {
       console.log("repo",repos)
        
    });
   
     
});
 
console.log("after");
function  getUser(id,resolve) {
    const p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Reading a user form a databes");
            resolve({id:id,gitHubusername:"op"});
        },2000)
    })
    setTimeout(()=>{
        console.log("Reading a user form a databes");
        callback({id:id,gitHubusername:"op"});
    },2000)
    
    
}
 function getRepsetary(username,callback) {
     setTimeout(()=>{
         console.log("Repositari API..")
         callback(["repo1","repo2","repo3"]);
     },2000);
     
     
 }