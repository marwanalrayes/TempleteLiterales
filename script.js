// ------Templete Literales (embed)-----------------------------
// Search templete literal tagging
let name ="marwan"
let stringItem = `my name is :- ${name}`//${} this is embed Literales
console.log(stringItem)

// ------Templete Literales (destrucing)-----------------------------
const user ={
    name:"marwan",
    age:22,
    address:"Gaza"
}
function printUserByLine(userProp){
    const{name,age,address} = userProp
    console.log(`your name is : ${name}`);
    console.log(`your age is : ${age}`);
    console.log(`your address is : ${address}`);
}
printUserByLine(user)