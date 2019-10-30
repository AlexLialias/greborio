var BUsers = [
    {
        username: "test1",
        password: "pw1"
    },
    {
        username: "test2",
        password: "pw2"
    },
    {
        username:"test3",
        password:"pw3"
    }
]
var PUsers = [
    {
        username: "test4",
        password: "pw4"
    },
    {
        username: "test5",
        password: "pw5"
    },
    {
        username:"test6",
        password:"pw6"
    }
]

function getPInfo(){
    var username = document.getElementById("usernameP").value
    var password = document.getElementById("passwordP").value
    for(i=0;i<PUsers.length;i++){
        if(username == PUsers[i].username && password == PUsers[i].password){
            return  true;
        }
    }
    alert("unsuccefull login")
    return false;
}

function getBInfo(){
    var username = document.getElementById("usernameB").value
    var password = document.getElementById("passwordB").value
    for(i=0;i<BUsers.length;i++){
        if(username == BUsers[i].username && password == BUsers[i].password){
            return  true;
        }
    }
    alert("unsuccefull login")
    return false;
}





