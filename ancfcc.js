console.log('before')

let user = getUser(12,(user1)=>{console.log(user1)})
console.log(user)
console.log('after');

function getUser(id,callback){
    setTimeout(()=>{
        console.log("Retrieve user data from database");
        return callback({id:id,name:"Mohammed"})
    },2000)
}


