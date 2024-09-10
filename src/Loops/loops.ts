//===================================
//      lvl 1_1
//===================================

console.log('%c lvl 1 1 ', 'background: #222; color: #bada55');

for (let i: number = 1; i <= 10; i++) {
    console.log("Hello Word " + i);
}

//===================================
//      lvl 1_2
//===================================

console.log('%c lvl 1 2 ', 'background: #222; color: #bada55');

let numbersToTen: number[] = [];

for (let i: number = 0; i <= 10; i++) {
    numbersToTen.push(i);
}

console.log(numbersToTen);

//===================================
//      lvl 1_3
//===================================

console.log('%c lvl 1 3 ', 'background: #222; color: #bada55');

let counter: number = 0;

while (counter < 10) {
    console.log("Hello World " + counter);
    counter++;
}

//===================================
//      lvl 1_4
//===================================

console.log('%c lvl 1 4 ', 'background: #222; color: #bada55');

const friendsName: string[] = ["Georg", "Anass", "Kim", "Eric", "Elaine"];

for (let i: number = 0; i < friendsName.length; i++) {
    console.log(friendsName[i]);
}

//===================================
//      lvl 1_10
//===================================

console.log('%c lvl 1 10 ', 'background: #222; color: #bada55');

const numberArr: number[] = [20, 30, 50, 10, 5, 6, 200, 23];

function giveHighestNumber(numbers: number[]) {
    //Möglichkeit 1
    // let sortArr: number[] = [...numbers];
    // sortArr.sort((a, b) => a - b);
    // return sortArr.pop();

    // Möglichkeit 2
    return Math.max(...numbers);
}

console.log(giveHighestNumber(numberArr))
giveHighestNumber(numberArr);

console.log("ausserhalb der function")
console.log(numberArr);

//===================================
//      lvl 2_3
//===================================

console.log('%c lvl 2 3 ', 'background: #222; color: #bada55');

const getNumberOfVowels = (text: string): void => {
    let countVowels: number = 0;
    for (let index: number = 0; index < text.length; index++) {
        switch (text[index]) {
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            case "a":
            case "i":
            case "e":
            case "o":
            case "u":
                countVowels++;
                break;
        }
    }
    console.log("Dein Text hat " + countVowels + " Vokale.")
}

getNumberOfVowels("hallo");