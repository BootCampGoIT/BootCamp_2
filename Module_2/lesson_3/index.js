console.log("Module 2. Lesson 3.");



// const templateData = ["Name", "Age", "Color", "Status"];
// const driverLic = ["Parents", "bsghj", "gjhgdjhs"];


// templateData.push("fdhsf");
// console.log(templateData)




// const getUserData = (items) => {
//     let info = [];
//     // for (let i = 0; i < qweewqewq.length; i += 1) {
//     //     let data = prompt(`${qweewqewq[i]}`);
//     //     info.push(data);
//     // }

//     for (const item of items) {
//         let data = prompt(`${item}`);
//         info.push(data);
//     }
//     return info
// }


// const data = getUserData(templateData);
// console.log(data)


// -------------------------------------
// const navigationItems = ["Home", "About", "Contacts", "SignIn", "SignUp"];

// const getTemplate = (items) => {
//     let total = "";
//     // for (let i = 0; i < items.length; i += 1) {
//     //     total += `<li>${i + 1}-${items[i]}</li>`
//     // }
//     for (const item of items) {
//         total += `<li>${items.indexOf(item)+1}-${item}</li>`
//     }
//     return total
// }

// const ul = document.querySelector(".list");
// ul.innerHTML = getTemplate(navigationItems);
// --------------------------------------


// const navigationItems = ["Home", "About", "Contacts", "SignIn", "SignUp"];
// const getData = () => {

//     for (const item of navigationItems ) {
//         if (item === "Contacts"){
//             return item
//         }
//     }
// }
// console.log(getData())

// function getInfo () {

// }

// const getInfo1 = function () {

// }
// const string = "Lorem ipsum dolor sit spam amet consectetur adipisicing elit. Dicta, corporis."
// // const stopWords = ["spam", "sale"];



// const getResult = (string, badWord) => {

//     const words = string.split(" ");
//     console.log(words);

//     for (const word of words) {
//         if (word.toLowerCase() === badWord) {
//             return true
//         }
//     }

//     return false
// }

// const data = getResult(string, "sale");

// // if (data) {
// //     console.log("В предложении есть слово 'sale'")
// // } else {
// //     console.log("В предложении нет слова 'sale'")
// // }
// data
//     ? console.log("В предложении есть слово 'sale'")
//     : console.log("В предложении нет слова 'sale'")


// for (const badWord of stopWords){
//     console.log(getResult(string, badWord)) ;
// }


// const data = getResult(string, "spam");
// console.log(data)



// const words = string.split(" ");
// console.log(words);


// for (const word of words) {
//     if (word.toLowerCase() === "spam" || word.toLowerCase() === "sale") {
//         console.log(true)
//     }
// }

// const a = 5;
// const b = a;


// const users = ["Alex", "Nikita"];
// // const result = [...users];
// // console.log(result);
// // result.push("ghsdcsc")
// // console.log(result);
// // console.log(users);
// const person = users;

// function addUser(person) {
//     console.log(person);
//     person.push("Denis");
//     return person
// }

// const result = addUser(users)
// console.log(result)



// --------------------------



// const getResult = (string = "", pricePerWord = 5) => string.split(" ").length * pricePerWord;

// const result = getResult("Lorem ipsum sit amet", 20);

// console.log(result)

// let string = "Lorem ipsum dolor sit amet."
// let str = "Lorem ipsum"

// const getResult = (sentence = []) => {

// }
// getResult()
// getResult(str)

const numbers = [];

for (let i = 0; i < 3; i += 1) {
  numbers.push(`label-${i}`);
}

console.log('numbers: ', numbers);


























