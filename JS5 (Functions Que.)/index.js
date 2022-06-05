// Create one function with zero parameter having a console statement;

function noParameter() {
    console.log("function with zero parameter");
}
noParameter();


// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a, b) {
    console.log(a + b);
}
sum(3, 4);


// Create one function which takes three parameter as first name and last name and age and return the statement as "A is 99 years old"

function person(fname, lname, age) {
    console.log(`${fname} ${lname} is ${age} Years Old`)
}
person("Tony", "Stark", 50);


// Create one arrow function

let arrowFun = () => {
    console.log("It's Arrow Function !")
};
arrowFun();


// Print output: 

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl(); // OP = Undefined


// Print output: 

// var x = 21;
// girl();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// }; // OP = Undefined & 21


// Print output

// var x = 21;
// a();
// b();
// console.log(a);
// function a() {

//     var x = 20;
//     console.log(x);
// };

// function b() {

//     var x = 40;
//     console.log(x);
// }; // OP = 20, 40, whole fun(a)


// Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function () {

//     x = 20;
//     console.log(x);
// };
// b = function () {

//     x = 40;
//     console.log(x);
// }; // OP = Reference Errorr - a is not defined


// Write a function that accepts parameter n and returns factorial of n

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
result = factorial(5);
console.log(result);