console.log("Module 2. Lesson 2");
// import { min, sum, dev, mult } from './functions.js'

// lesson 1 --- end 
// ------------------ Методы массивов -----------------------

// => push()

// const arr = [1, 2, 3, 4, 5, 6];
// arr.push(7);
// console.log(arr);
// const ins = arr.push(7);
// console.log(ins)

// console.log(arr)

// // => pop()
// arr.pop();
// const del = arr.pop();
// console.log(del)
// // console.log(arr.pop())
// console.log(arr);

// // => shift()
// arr.shift();
// console.log(arr);


// // => unshift()
// arr.unshift(1);
// console.log(arr);


// => slice();
// const arr = [1, 2, 3, 4, 5, 6];
// const slice = arr.slice(1, 4); //[2,3,4]
// console.log(slice);
// // console.log(arr.slice(1, 4));

// for (let i = 0; i < slice.length; i += 1) {
//     console.log(slice[i])
// }

// slice.push("new");
// console.log(slice);



// => splice();
// ----- delete ------
// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.splice(0, 3); //[1,2,3]
// console.log(newArr);
// console.log(arr);

// ----- ins -----
// const elem = "new";
// const elem1 = "gshjrs"

// const arr = [1, 2, 3, 4, 5, 6];
// arr.splice(2, 0, elem, elem1);
// console.log(arr);

// ----- replace ---------------
// const arr = [1, 2, 3, 4, 5, 6];
// const elem = "new";
// arr.splice(2, 1, elem);
// arr.splice(arr.length, 0, "last");
// console.log(arr);

// arr[20] = "ysghdj";
// console.log(arr);

// => concat()
// const arr = [1, 2, 3, 4];
// const newArr = [5, 6, 7, 8];

// // const result = arr.concat(newArr);
// const result = newArr.concat(arr);
// console.log(result);
// console.log(arr);
// console.log(newArr);

// console.dir(arr);
// console.log(arr.reverse());
// ------------  -----------------


// Lesson 2
// ---------- Функции -------------------

// ----- function expression ------------------
// let result = 0;

// const getResult = function (num1, num2, result) {
//     return result + num1 + num2;
// }

// const res1 = getResult(25, 50, result); //75
// const res2 = getResult(25, 50, 30); //75

// console.log(res1);
// console.log(res2);

// const result = getResult(5, 10);
// console.log(result);
// console.log(25, 30);

// --------- Порядок выполения кода -------------

// const fnA = function () {
//     console.log('Начала выполняться [fnA]');
//     fnB();
//     //.....
//     console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// };

// const fnB = function () {
//     console.log('Выполняется [fnB]');
// };

// console.log('Начал выполнение [main]');
// fnA();
// console.log('Продолжил выполняться [main] после выхода из [fnA]');



// ------- Параметры по умолчанию ----------------

// const func = function (r = 5, pi = 3.14) {
//     return pi * r * r
// }

// const result = func(25)
// console.log(result)


// --------- Псевдомассив arguments --------------
// const func = function () { //arguments = [1, 12, 3, 24, 56, 6, 78, 8, 423, 234232, 234234, 23432, 234]
//     // console.log(arguments); //arguments !== [] 
//     let sum = 0; //492743
//     const arr = Array.from(arguments);
//     console.log(arr);

//     arr.push("new");
//     for (const argument of arr) {
//         console.log(argument)
//         // sum = sum + argument
//         sum += argument
//     }

//     return sum;
// }

// console.log("Result:", func(1, 12, 3, 24, 56, 6, 78, 8, 423, 234232, 234234, 23432, 234));

// console.dir(func)

// ---------------------
// const func = function (a, ...rest) { //arguments = [1, 12, 3, 24, 56, 6, 78, 8, 423, 234232, 234234, 23432, 234]
//     rest.push(a);
//     console.log(rest)
// }
// func(1, 12, 3);


//  - ------- REST --------- -
// const func = function (a, b) {
//     console.log(a + b)
//     // --
//     // console.log(arguments)
//     // console.log(rest);
//     // rest.pop();
//     // console.log(rest);
//     // rest.unshift("new");
//     // console.log(rest)
//     // console.log(a + b);
//     // console.log(rest);
//     // rest.push(a);
//     // console.log(rest)
//     // --
// }

// func(1, 2, 3, 4, 5, 8, 0);

// func(1, 2);

// --
// func(1, 2);
// func(11, 2);

// -------------- Паттерн Guard Clause ----------------
// const getResult = function (a = 5) {
//     if (a === 5) {
//         return 5
//     }
//     if (a > 5) {
//         return 5 + a
//     }
//     if (a < 5) {
//         return 5 - a
//     }
//     if (a !== 5) {
//         return a + 100
//     }
// }

// console.log(getResult(2))


// ------------- Объявление функции --------------
// function expression
// const result = function (a, b) {
//     console.log(a + b)
// }
// result(2, 5)


// function declaration
// function getResult1(a, b) {
//     console.log(a + b);
// }

// getResult1(2, 5);

// arrow function
// const getResult = (a, b) => {
//     console.log(a + b)
// }
// getResult(2, 5)

// ---------- Область видимости -------------------

// let value = 5; //15

// function getValue() {
//     // let value = 10;
//     // value += 10;
//     value = 5 + 10;
//     console.log(value); //15
// }

// console.log(value); //5

// getValue(); //15

// console.log(value); //15


// ---------- Стрелочные функции -------------------

// const sum = (a, b) => {
//     return a + b
// }

// const min = (a, b) => {
//     console.log(a);
//     console.log(b);
//     return a - b
// }

// const mult = (a, b) => a * b;
// const dev = (a, b) => a / b;


// console.log("sum:", sum(10, 5))
// console.log("min:", min(10, 5))
// console.log("mult:", mult(10, 5))
// console.log("dev:", dev(10, 5))


// ----------------------------------------
const sum = (a, b) => a + b;
const min = (a, b) => a - b;
const mult = (a, b) => a * b;
const dev = (a, b) => a / b;

// const calculate = function (a, b, operator) {
//     if (operator === "+") {
//         return sum(a, b);
//     }
//     if (operator === "-") {
//         return min(a, b);
//     }
//     if (operator === "*") {
//         return mult(a, b);
//     }
//     if (operator === "/") {
//         return dev(a, b);
//     }
// }

// function calculate(a, b, operator) {
//     if (operator === "+") {
//         return sum(a, b);
//     }
//     if (operator === "-") {
//         return min(a, b);
//     }
//     if (operator === "*") {
//         return mult(a, b);
//     }
//     if (operator === "/") {
//         return dev(a, b);
//     }
// }

const sum = (a, b) => a + b;
const min = (a, b) => a - b;
const mult = (a, b) => a * b;
const dev = (a, b) => a / b;

const calculate = (a, b, operator) => {
    if (operator === "+") {
        return sum(a, b);
    }
    if (operator === "-") {
        return min(a, b);
    }
    if (operator === "*") {
        return mult(a, b);
    }
    if (operator === "/") {
        return dev(a, b);
    }
}

console.log(calculate(10, 5, "+"))
console.log(calculate(10, 5, "/"))

// console.log("sum:", sum(10, 5))
// console.log("min:", min(10, 5))
// console.log("mult:", mult(10, 5))
// console.log("dev:", dev(10, 5))



// -------------- Стрелочные функции и arguments ------------

// const func = (...rest) => {
//     console.log(rest)
// }

// func(1, 2, 3, 4, 5)

// --------------- homeWork -------------------



