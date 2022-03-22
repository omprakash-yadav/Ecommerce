function My_function(num,callback){
    callback(num)

}
function prime_number(data){
    if(data%2===0){
        console.log(` The Number of  ${data} is a prime `)
    }else{
        console.log(` The Number of ${data} not a prime `)
    }

}
function Fectorial(data){
    if(data>0){
        let fect=1;
        for(i=1;i<=data;i++){
            fect *=i;

        }
        console.log(`The fectorial of ${data} is ${fect}`)
        

    }
}
My_function(10,prime_number);

My_function(11,Fectorial);