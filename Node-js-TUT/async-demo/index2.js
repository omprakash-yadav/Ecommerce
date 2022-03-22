console.log("Before");
getUser(1,(user)=>{
    getRepsetary(user.gitHubusername,(repos)=>{
        getCommits(repo,(commits)=>{

        });
    });
});
console.log("After");

console.log("before");
//const user=getUser(1);
//
const repos=getRepsetary(user.gitHubusername);
//const commits=getCommits(repos[0]);
console.log("after")
function  getUser(id,callback) {
    setTimeout(()=>{
        console.log("Reading a user form a databes");
        callback({id:id,gitHubusername:"op"});
    },2000)
};
function getRepsetary(username,callback) {
    setTimeout(()=>{
        console.log("Repositari API..")
        callback(["repo1","repo2","repo3"]);
    },2000);
    
    
}