/* ------------------------------------- Introduction ------------------------------------------- */


// JavaScript = scripting language for webpages
//              can be used for both client-side and server-side developments.

// This is a command

/*
   this 
   is 
   a 
   command
*/

// console.log('print statement');
// window.alert('how are you');

// document.getElementById('abc').textContent = 'hi';





/* ------------------------------------- Variables ------------------------------------------- */


// variable = A container that stores a value.
//                   Behaves as if it were the value it contains.

// let fullName = "Bro Code";
// let age = 25;
// let isStudent = false;

// console.log(typeof fullName);
// console.log(typeof age);
// console.log(typeof isStudent);

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;





/* -------------------------------- Arithmetic Operators ------------------------------------------- */



// arithmetic operators = operands (values, variables, etc.)
//                                         operators (+ - * /)
//                                         ex. 11 = x + 5;

// let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = students % 3;

// console.log(students);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students++;
//students--;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/


// let result = (2+8) * 3+1 - 2**3 ; 
// console.log(result);

/*  
Explanation :

=> 10 * 3+1 - 8
=> 30 + 1 - 8
=> 31-8 
=> 23 
*/          




/* -------------------------------- User Input ------------------------------------------- */



// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox


// EASY WAY 

// let username = window.prompt("What's your username?");
// console.log(username);


// PROFESSIONAL WAY 

// let data;

// document.getElementById('submit').onclick = ()=>{
//     data= document.getElementById('text').value ;
//     document.getElementById('abc').textContent = data ;
// }



/* -------------------------------- Type Conversion ------------------------------------------- */


// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)


// EXAMPLE 1

// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);


// EXAMPLE 2 

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);




/* -------------------------------- Constants ------------------------------------------- */


// const = a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;

// PI = 420.69;

// document.getElementById("submit").onclick = function(){
//     radius = document.getElementById("text").value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("abc").textContent = circumference + " cm";
// }




/* -------------------------------- Counter Program ------------------------------------------- */


// const INCRE = document.getElementById('incre');
// const DECRE = document.getElementById('decre');
// const RESET = document.getElementById('reset');
// const COUNTER = document.getElementById('counter');

// let count = 0;

// INCRE.onclick = ()=>{
//    count++;
//    COUNTER.textContent= count;
// }


// RESET.onclick = ()=>{
//     count = 0;
//     COUNTER.textContent= count;
//  }
 

// DECRE.onclick = ()=>{
//     count--;
//     COUNTER.textContent= count;
// }
 




/* -------------------------------- Math Object ------------------------------------------- */



// Math = built-in object that provides a
//              collection of properties and methods

// let x = 3;
// let y = 2;
// let z = 1;

//console.log(Math.PI);
//console.log(Math.E);

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x);
//z = Math.sign(x);


// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(min);





/* -------------------------------- Random Number Generator ------------------------------------------- */



// RANDOM NUMBER GENERATOR

// const NUM1 = document.getElementById('num1');
// const NUM2 = document.getElementById('num2');
// const NUM3 = document.getElementById('num3');
// const GENERATE = document.getElementById('btn');

// const MIN = 23;
// const MAX = 45;

// let random1 = 0 ;
// let random2 = 0;
// let random3 = 0 ;


// GENERATE.onclick = function(){
//     random1 = Math.floor(Math.random() * MAX) + MIN ;
//     random2 = Math.floor(Math.random() * MAX) + MIN ;
//     random3 = Math.floor(Math.random() * MAX) + MIN ;
//     NUM1.textContent = random1;
//     NUM2.textContent = random2;
//     NUM3.textContent = random3;
// }





/* -------------------------------- IF Statement ------------------------------------------- */



// IF STATEMENTS = if a condition is true, execute some code
//                                   if not, do something else


// const DATA = document.getElementById('text');
// const SUBMIT = document.getElementById('submit');
// const RESULT = document.getElementById('abc');

// let age;

// SUBMIT.onclick = function(){

//     age=DATA.value;
//     age=Number(age);

//     if(age==18){
//       RESULT.textContent = 'You are allowed';
//     }
//     else if(age< 18){
//         RESULT.textContent = 'You are not allowed';
//     }
//     else if(age>18){
//         RESULT.textContent = 'you are always welcome';
//     }
//     else{
//         RESULT.textContent = 'something wrong';
//     }
// }




/* -------------------------------- Checked Property ------------------------------------------- */


// .checked = property that determines the checked state of an 
//                     HTML checkbox or radio button element

// const SUBSCRIBE = document.getElementById("subscribe");
// const GPAY = document.getElementById("gpay");
// const PHONEPAY = document.getElementById("phonepay");
// const PAYTM = document.getElementById("paytm");
// const SUBMIT = document.getElementById("submit");

// const SUBRESULT = document.getElementById("message");
// const PAYRESULT = document.getElementById("message2");

// SUBMIT.onclick = function(){

//     if(SUBSCRIBE.checked){
//         SUBRESULT.textContent = `You are subscribed!`;
//     }
//     else{
//         SUBRESULT.textContent = `You are NOT subscribed!`;
//     }


//     if(GPAY.checked){
//         PAYRESULT.textContent = `You are paying with Gpay`;
//     }
//     else if(PHONEPAY.checked){
//         PAYRESULT.textContent = `You are paying with Phonepay`;
//     }
//     else if(PAYTM.checked){
//         PAYRESULT.textContent = `You are paying with Paytm`;
//     }
//     else{
//         PAYRESULT.textContent = `You must select a payment type`;
//     }
// }





/* -------------------------------- Ternary Operator ------------------------------------------- */


// ternary operator = a shortcut to if{} and else{} statements
//                                  helps to assign a variable based on a condition
//                                  condition ? codeIfTrue : codeIfFalse;

// let time = 9;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "You are a student" : "You are NOT a student";
// console.log(message);

// let purchaseAmount = 20;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);





/* -------------------------------- Switch Statement ------------------------------------------- */


// Switch = can be an efficient replacement to many else if statements

// const MARK = "uhhu";
// let message ; 

// switch(true){

//     case (MARK>50):
//         message='pass';
//         break;

//     case (MARK<50):
//         message='failed';
//         break;

//     default: 
//         message="something wrong"    
// }

// console.log(message);




/* -------------------------------- String Methods ------------------------------------------- */


