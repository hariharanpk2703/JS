// function counter() {
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter++;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter()); 

// OP = 1, 2, 3, 4


// let count = 0;
// (function immediate() {
//     if (count === 0) {
//         let count = 1;
//         console.log(count); // What is logged?
//     }
//     console.log(count); // What is logged?
// })(); 

// OP = 1, 0


// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i); // What is logged?
//     }, 1000);
// }

// OP = 3 


// Write a code to explain closure

// function greeting() {
//     let message = 'Hi';

//     function sayHi() {
//         console.log(message);
//     }

//     return sayHi;
// }
// let hi = greeting();
// hi(); // still can access the message variable


// Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

// function OuterFunction() {

//     var length = 10;

//     function InnerFunction() {
//         var width = 2;
//         var area;
//         console.log(area = length * width);
//     }

//     return InnerFunction;
// }
// var innerFunc = OuterFunction();

// innerFunc(); 


// Take a variable in outer function and create an inner function to increase the counter every time it is called

// function outer(a) {
//     return function inner() {
//         let count = 0;
//         a++;
//         count += a;
//         console.log(count)
//     }
// }
// const op = outer(0);
// op();
// op();
// op();
// op();


//Print Output

// var a = 12;
// (function () {
//     alert(a);
// })(); 

// OP = 12


//Print Output

// var a = 10;
// var x = (function () {
//     var a = 12;
//     return function () {
//         alert(a);
//     };
// })();
// x(); 

// OP = 12


//Print Output

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';

    (function innerFunc(innerArg) {
        var innerVar = 'b';

        console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar =" + globalVar);
  })(456);
})(123);

// OP = 123, 456, a, b, xyz

