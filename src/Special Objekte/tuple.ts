//===============================
//          Tulpe
//===============================
console.log('%c Tulpe lvl 1 1 ', 'background: #222; color: #bada55');

const starWarsActor: [[string, string], [string, string], [string, string]] = [
    ["Luke Skywalker", "Mark Hamill"],
    ["Yoda", "Frank Oz"],
    ["Han Solo", "Harrison Ford"]
]

starWarsActor.forEach((elt) => {
    console.log(elt[0] + " wird gespielt von " + elt[1]);
})

//===============================
//          Tulpe
//===============================
console.log('%c Tulpe lvl 2 1 ', 'background: #222; color: #bada55');

const employeeOne: [number, string, string, number] = [1, "Elaine", "Development", 40000];
const employeeTwo: [number, string, string, number] = [2, "Anass", "Development", 50000];
const employeeThree: [number, string, string, number] = [3, "Kim", "HR", 42000];
const employeeFour: [number, string, string, number] = [4, "Sergio", "CEO", 60000];
const employeeFive: [number, string, string, number] = [5, "Jacob", "Marketing", 44000];

const employeeArr: [
    [number, string, string, number],
    [number, string, string, number],
    [number, string, string, number],
    [number, string, string, number],
    [number, string, string, number],
] = [employeeOne, employeeTwo, employeeThree, employeeFour, employeeFive];

console.log(employeeArr);