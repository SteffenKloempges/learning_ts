//===============================
//          lvl 1 1
//===============================
console.log('%c lvl 1 1 ', 'background: #222; color: #bada55');

const bucketList: String[] = ["Stockholm", "Helsinki", "Oslo"];
const luckyNumbers: Number[] = [7, 13, 20];
const favoritePeople: String[] = ["Mathilda", "Carina", "Barny"];

console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

//===============================
//          lvl 3 3
//===============================
console.log('%c lvl 3 3 ', 'background: #222; color: #bada55');

const inputMeal = document.querySelector('#adding-form__input') as HTMLInputElement;
const addMealBtn = document.querySelector('#adding-form__button') as HTMLButtonElement;
const selectWeek = document.querySelector('#adding-form__weeklist') as HTMLSelectElement;
const mealList = document.querySelector('.show__mealList') as HTMLElement;
const showWeek = document.querySelector('.show__week') as HTMLElement;

const mealsWeekArr: String[][] = [
    ["Burger", "Pizza"],
    ["Pizza", "Burger"],
    ["Pasta", "Pizza"],
    ["Pizza", "Pasta"]
];

const showMealList = () => {
    mealList.innerHTML = "";
    let subArrIndex = 0;
    let selectedWeek = "Week 1";

    switch (selectWeek.value) {
        case "week1":
            subArrIndex = 0;
            break;
        case "week2":
            subArrIndex = 1;
            selectedWeek = "Week 2";
            break;
        case "week3":
            subArrIndex = 2;
            selectedWeek = "Week 3";
            break;
        case "week4":
            subArrIndex = 3;
            selectedWeek = "Week 4";
            break;
    }

    showWeek.textContent = selectedWeek;

    mealsWeekArr[subArrIndex].forEach((item) => {
        const createMealItem = document.createElement('li');
        createMealItem.textContent = String(item);
        createMealItem.classList.add("show__mealList__mealItem");
        mealList.append(createMealItem);
    })
}

showMealList();


addMealBtn.addEventListener("click", () => {
    switch (selectWeek.value) {
        case "week1":
            mealsWeekArr[0].push(inputMeal.value)
            break;
        case "week2":
            mealsWeekArr[1].push(inputMeal.value)
            break;
        case "week3":
            mealsWeekArr[2].push(inputMeal.value)
            break;
        case "week4":
            mealsWeekArr[3].push(inputMeal.value)
            break;
    }
    showMealList();
});

selectWeek.addEventListener("change", showMealList);

//===================================
//      lvl 2 1 ternary/filter
//===================================
console.log('%c lvl 2 1 ', 'background: #222; color: #bada55');

const woerter: string[] = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

const maxSixChars = woerter.filter((elt) => elt.length <= 6);
console.log(maxSixChars);

const eAsChar = woerter.filter((elt) => {
    if (elt.includes("e") || elt.includes("E")) {
        return elt
    }
})
console.log(eAsChar);

const checkVowels: string[] = ["a", "e", "i", "o", "u"];

const wordsWithVowels = woerter.filter((elt) => {
    for (let i = 0; i < checkVowels.length; i++) {
        if (elt.includes(checkVowels[i])) {
            return elt;
        }
    }
})

console.log(wordsWithVowels);

//===================================
//      lvl 3_2 
//===================================

console.log('%c lvl 3 2 ', 'background: #222; color: #bada55');

const todoArr: string[] = [];

const addItem = (todo: string, atTheBack: boolean) => {
    atTheBack ? todoArr.push(todo) : todoArr.unshift(todo);
}

addItem("putzen", false);
addItem("kochen", true);
addItem("waschen", true);
addItem("spielen", false);

console.log(todoArr);

const removeItem = (atTheBack: boolean) => {
    atTheBack ? todoArr.pop() : todoArr.shift();
}

removeItem(false);
removeItem(true);

console.log(todoArr);

let todoArr2: string[] = ["kochen", "putzen", "schlafen", "waschen", "spülen", "aufräumen", "einkaufen"];

const addItemAt = (todo: string, indexToAdd: number) => {
    todoArr2 = todoArr2.slice(0, indexToAdd).concat(todo).concat(todoArr2.slice(indexToAdd));
}

addItemAt("zocken", 1);

console.log(todoArr2);

console.log("----------")

const removeItemAt = (indexToRemove: number) => {
    todoArr2 = todoArr2.slice(0, indexToRemove).concat(todoArr2.slice(indexToRemove + 1));
}

removeItemAt(1);
removeItemAt(3);

console.log(todoArr2);