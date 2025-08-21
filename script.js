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
//Coding Style  / style guide rules
function printUserByLine(userProp){
    const{name,age,address} = userProp
    console.log(`your name is : ${name}`);
    console.log(`your age is : ${age}`);
    console.log(`your address is : ${address}`);
}
printUserByLine(user)

// ------ Coding Style  / style guide rules-----------------------------
//------- how can i make number of array by object style----------------
const number =[1,2,3,4]
const [firstNumber,secoundNumber,thirdNumber] =number
console.log(thirdNumber)

// ------ another Example ----------------------------------------------
const users = [
    { name: "marwan", age: 22 },
    { name: "mahran", age: 20 },
    { name: "dema", age: 10 },
];
const [firstMember,,thirdMember]=users
console.log(firstMember);
console.log(thirdMember);

// ------ swaping ------------------------------------------------------
// in any programming language
// temp <= firstvar
// firstvar <= secoundvar
// secoundvar <= temp
// in any ES6
//  ----- firstvar------------------------------------------------------
// firstvar
// firstvar <= secoundvar
// secoundvar <= firstvar
// ----- Example in array ----------------------------------------------
const numbers = [1 , 2];
[numbers[0], numbers[1]] = [numbers[1], numbers[0]]
console.log(numbers)
 // ----- Example natural variables ------------------------------------
// ----- basic swap ----------------------------------------------------
let a=1
let b=2
let temp = a //temp =1 , a= 1 , b =2
a = b //temp = 1 , a = 2 , b = 2
b = temp //temp = 1 , a = 2 , b = 1
console.log(a,b)

// ----- ES6 swap ------------------------------------------------------
let a1 = 1
let b1 = 2
[a,b]=[b,a]
console.log(a,b)
/* ملاحظة اذا بدك تعمل سواب دايما يكون
تعريفك للفاريابل لت مش كونست لانو الكونست
للثوابت*/

// ----- defensive programming-------------------------------------------
// function greetUser (name = `unknown user`)  this name is defult parameter
function greetUser (name){
    console.log(`hello ${name || `unknown user`}`)
}
greetUser()

