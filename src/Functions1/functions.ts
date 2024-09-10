//===============================
//          lvl 1 3
//===============================
console.log('%c lvl 1 3 ', 'background: #222; color: #bada55');

function showPerson(name: string, city: string, age: number) {
    console.log(`Hallo, ich bin ${name} und komme aus ${city}. Ich bin ${age} Jahre alt.`)
}

showPerson("Steffen", "Kamen", 32);

//===============================
//          lvl 1 4
//===============================
console.log('%c lvl 1 4 ', 'background: #222; color: #bada55');

function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
    const nameOutput = `Mein Lieblingsheld ist ${heroName}`;
    const powerOutput = `Er hat die Fähigkeit ${heroPower}`;
    const enemyOutput = `Sein größter Feind ist ${heroEnemy}`;

    console.log(nameOutput);
    console.log(powerOutput);
    console.log(enemyOutput);
}

showHero("Batman", "Geld", "Lex Luther");

//===============================
//          lvl 1 5
//===============================
console.log('%c lvl 1 5 ', 'background: #222; color: #bada55');

function multiplyAndDivide(num1: number, num2: number) {
    if (num1 === 0 || num2 === 0) {
        console.log("0 ist keine zulässige Zahl");
        return;
    }

    const multiply = num1 * num2;
    const divide = num1 / num2;

    console.log(`Multiplikation von ${num1} und ${num2}: ${multiply}`);
    console.log(`Division von ${num1} und ${num2}: ${divide}`);
}

multiplyAndDivide(10, 2);
multiplyAndDivide(30, 20);

//===============================
//          lvl 1 6
//===============================
console.log('%c lvl 1 6 ', 'background: #222; color: #bada55');

function returnOne() {
    return 1;
}

let x = 1;
let y = returnOne();

if (x === y) {
    console.log("Was wird gedruckt ?")
}

//===============================
//          lvl 1 7
//===============================
console.log('%c lvl 1 7 ', 'background: #222; color: #bada55');

function multiply(num1: number, num2: number) {
    return num1 * num2;
}

const simpleMulti = multiply(2, 2);
console.log(simpleMulti);

//===============================
//          lvl 1 8
//===============================
console.log('%c lvl 1 8 ', 'background: #222; color: #bada55');

