/*
let condition1 = true;
let condition2 = false;

 && AND OPERATOR  es como un comparador 
console.log(condition1 && condition2);

true && true // === true
true && false // === false
false && true // === false

let age = 18;
let money = true;


// && AND OPERATOR  es como un comparador 
//console.log(age && money);

if (age >= 18 && money){
    console.log("El usuario puede pasar");
} else {
    console.log("El usuario no puede pasar");
}
*/ 

// || OR OPERATOR  mientras se cumpla una condicion es suficiente 
let age = 18;
let money = true;
if (age >= 18 || money){
    console.log("El usuario puede pasar");
} else {
    console.log("El usuario no puede pasar");
}