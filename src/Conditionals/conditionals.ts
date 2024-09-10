//===============================
//          lvl 1 5
//===============================
console.log('%c lvl 1 5 ', 'background: #222; color: #bada55');
// const weekdayAsNumber: number = Number(window.prompt("Please insert a number from 0 to 6"));
// let weekdayAsString: string = "";

// switch (weekdayAsNumber) {
//     case 0:
//         weekdayAsString = "Sunday";
//         break;
//     case 1:
//         weekdayAsString = "Monday";
//         break;
//     case 2:
//         weekdayAsString = "Tuesday";
//         break;
//     case 3:
//         weekdayAsString = "Wednesday";
//         break;
//     case 4:
//         weekdayAsString = "Thursday";
//         break;
//     case 5:
//         weekdayAsString = "Friday";
//         break;
//     case 6:
//         weekdayAsString = "Saturday";
//         break;
//     default:
//         console.log("Bitte gib eine korrekte Zahl ein zwischen 0 und 6");
// }

// console.log(weekdayAsString);

//===============================
//          lvl 2 2
//===============================
console.log('%c lvl 2 2 ', 'background: #222; color: #bada55');

let isOnline: boolean = true;
let isPremiumUser: boolean = false;
let isAdult: boolean = true;
let monthlyFee: number = 0;

isOnline ? console.log("online") : console.log("offline");
isPremiumUser ? monthlyFee = 12.99 : monthlyFee = 19.99;
console.log(monthlyFee);
//isAdult ? window.confirm('Willkommen') : window.alert('Keine Berechtigung');

let randomAge = Math.floor(Math.random() * 121);
let randomSalary = Math.floor(Math.random() * 15001);
let isMiddleAge: boolean;

randomAge >= 40 && randomAge <= 60 ? isMiddleAge = true : isMiddleAge = false;
console.log(randomAge);
console.log(isMiddleAge);

console.log(randomSalary);
randomSalary > 10000 ? console.log("You Are Rich") : randomSalary > 1500 ? console.log("Not too bad") : console.log("Not that much");

//===============================
//          lvl 2 3
//===============================
console.log('%c lvl 2 3 ', 'background: #222; color: #bada55');

function checkForMultiply(num1: number) {
    let diff: number = num1 - 27;
    console.log("Diff is :" + diff);
    num1 > 27 ? diff = diff * 2 : null;
    console.log(diff);
}

checkForMultiply(35);
checkForMultiply(74);
checkForMultiply(123);

//===============================
//          lvl 2 8
//===============================
console.log('%c lvl 2 8 ', 'background: #222; color: #bada55');

const randomGrade = Math.ceil(Math.random() * 9);
console.log("RandomGrade is : " + randomGrade);
switch (randomGrade) {
    case 1:
        console.log("Sehr gut");
        break;
    case 2:
        console.log("Gut");
        break;
    case 3:
        console.log("Befriedigend");
        break;
    case 4:
        console.log("Ausreichend");
        break;
    case 5:
        console.log("Mangelhaft");
        break;
    case 6:
        console.log("Ungenügend");
        break;
    default:
        console.log("Das ist keine Schulnote");

}