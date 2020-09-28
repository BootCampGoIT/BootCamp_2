console.log("Module 2. Lesson 1")

// ---------- Циклы -------------------

// => while

// let counter = 0;
// let number = 5;
// let step = 1;
// while (counter < number) { //0 < 5 : 1 < 5
//     console.log("counter:", counter, "step:", step, "number:", number)
//     counter = counter + step;
//     counter += step;
// }

// => do while
// let counter = 10;
// let number = 5;
// let step = 1;

// do {
//     if (counter > 5) {
//         console.log("Warning. counter > number")
//     } else {
//         counter += step;
//         console.log("counter:", counter, "step:", step, "number:", number);
//     }

// } while (counter < number)

// => for
// let length = 10;
// let i = 2000;

// for (let i = 0; i <= length; i += 1) {
//     console.log(i)
// }


// -----ex --------
// let result = 0;

// for (let k = 0; k <= 20; k += 2) { // 0, 2 ,4,6,8,10,...
//     // result = result + k;
//     result += k;
// }

// console.log(result)
// -----------------------



// => break
// let length = 100;

// for (let i = 0; i <= length; i += 1) {
//     console.log(i);
//     if (i === 20) {
//         break;
//     }
// }

// => continue


// for (let i = 0; i <= 5; i += 1) {
//     console.log('i:', i)
//     if (i % 2 === 0) { //0:2; 1:2; 2:2; 
//         continue
//     }
//     //sdfdsdsffds
//     ///sddsfdfssd
//     //sdfsfsd
//     console.log("выполнен с остатком", i);
// }


// ---------- Массивы -------------------

// => Создание

// const array = [];

// const users = ["Andrii", "Alex", "Nikita"];





// => Доступ к элементам

// const user = ["Alex", 25, "gray", "student"];

// console.group(`${user[0]}'s info:`);
// console.log("Name:", user[0]);
// console.log("Age:", user[1]);
// console.log("Color:", user[2]);
// console.log("Status:", user[3]);
// console.groupEnd();

// => Переопределение
// const user = ["Alex", 25, "gray", "student"];
// console.log(user);
// user[1] = 26;
// console.log(user);

// console.log(user.length) //4

// user[user.length - 1] = 'teacher'
// console.log(user);




// ---- ex ---------

// const user = ["Alex", 25, "gray", "student", true];
// // user[20] = "online";
// // console.log(user);
// // console.log(user[20]); //elements 21
// user[user.length] = "offline"
// console.log(user)
// console.log(user.length)
// user.length = 100;
// console.log(user)

// ----- ex ---
// const user = [];
// let data = "";

// do {
//     data = prompt("Enter data, please!");
//     if (data !== null){
//         user[user.length] = data;
//     }

// } while (data !== null);

// console.log(user);

// ----- ex ---
// const user = [];
// let data = "";

// while (data !== null) {
//     data = prompt("Enter data, please!");
//     if (data !== null) {
//         user[user.length] = data;
//     }
// }

// console.log(user);


// => for со счетчиком
// const userTemplateData = ["Name:", "Age:", "Color:", "Status:"];
// const user = [];
// for (let i = 0; i < userTemplateData.length; i += 1) {
//     let data = prompt(`${userTemplateData[i]}`);
//     user[i] = data;
// }
// console.log(user);
// ----------------------------


// => for ... of
// const userTemplateData = ["Name:", "Age:", "Color:", "Status:"];
// for (const key of userTemplateData) {
//     console.log(key)
// }


// const numbersArr = [1, 2, 3, 4, 5, 6];
// for (let i = 3; i < numbersArr.length; i += 1) {
//     console.log(numbersArr[i])
// }
// const number = 323323

// const numbersArr = [1, 2, 3, 4, 5, 6];

// for (const number of numbersArr) {
//     console.log(number)
// }

// => break, continue
// const users = ["Alex", "Nikita", "Maksim"];
// const newUser = "Maksim";

// for (const user of users) { //user === "Alex"
//     if (user === newUser) {
//         console.log("User exist")
//         break
//     } 
// }

// console.log(users)


// const users = ["Alex", "Nikita", "Maksim"];
// const newUser = "Maksim";
// let isExist = false;

// for (const user of users) { //user === "Alex"
//     if (user !== newUser) {
//         isExist = false;
//         break
//     } 
// }
// if (!isExist) {
//     users[users.length] = newUser;
// }

// console.log(users)



// const users = ["Alex", "Nikita", "Maksim", "fsfdsd", "sfsdfdsf"];
// const newUser = "Maksim";


// for (const user of users) { //user === "Alex"
//     if (user !== newUser) {
//         continue
//     }
//     console.log("User Exist")
//     break
// }

// console.log(users)


// const numbers = [1, 2, 3, 4, 5]
// for (const number of numbers) {
//     console.log(number)
// }


// => Многомерные массивы 
// const array = [ 
//     [100, 200], 
//     [200, 300],
//     [400, 500],
// ]

// for (const position of array) {
//     console.log("X:", position[0], "Y:", position[1])
// }


// -------
// const array = [ 
//     [100, 200], //0
//     [200, 300], //1
//     [400, 500], //2
// ]
// console.log(array[1][0])

// const array = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(array[2][1]);
// let result;
// const find = 8

// for (let i = 0; i < array.length; i += 1) {
//     // console.log(i)
//     // console.log(array[i])
//     for (let k = 0; k < array[i].length; k += 1) {
//         // console.log("k", k);
//         // console.log("current:", array[i][k])
//         if (array[i][k] === find) {
//             result = [i, k]
//         }
//     }
// }
// console.log(result)


// ---------- Присвоение по ссылке и по значению  -------------------

// ---------- Методы массива  -------------------

// => split
// const text = "Lorem ipsum dolor sit amet.";
// const resultArr = text.split(' ');
// console.log(resultArr);

// --ex
// const data = '2020-09-06';
// const res = data.split("-");
// console.log(res);
// console.log(res[res.length-1]);
// console.log(res.reverse())

// => join
// const data = ["Alex", 25, "student"];
// console.log(data.join('/'))

// const data = ["2020", "09", "06"];
// console.log(data.join(' '))

// => indexOf()

// const users = ["Alex", "Nikita", "Maxim"];
// console.log(users.indexOf("Maxim1"))

// => includes()
// const users = ["Alex", "Nikita", "Maxim"];

// if (users.includes('Nikita')) {
//     console.log(users.indexOf('Nikita'))
// }



// -----------------------------------------

// => push()
// => pop()

// => shift()
// => unshift()

// => slice()

// => splice()

// => concat()

// ------------ ДОПОЛНИТЕЛЬНО -----------------

// for (let i = 0; i <= 3; i += 1) {
//     setTimeout(() => {
//         console.log(i)
//     }, 2000);
// }



// Lesson 2
// ---------- Функции -------------------
// ---------- Область видимости -------------------
// ---------- Стрелочные функции -------------------