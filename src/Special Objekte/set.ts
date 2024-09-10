//===============================
//          Set
//===============================
console.log('%c Set lvl 1 1 ', 'background: #222; color: #bada55');

const starWarsActor = new Set<string>(["Luke Skywalker", "Obi Wan", "Yoda"]);

console.log(starWarsActor);
starWarsActor.add("Luke Skywalker");
console.log(starWarsActor);

if (starWarsActor.has("Yoda")) {
    console.log("Yoda ist dabei");
}

console.log(starWarsActor.size);

//===============================
//          Set
//===============================
console.log('%c Set lvl 2 1 ', 'background: #222; color: #bada55');

const superheros: string[] = ["Iron Man", "Thor", "Hulk", "Black Widow"];
superheros.push("Iron Man", "Thor");
console.log(superheros);

const superherosSet = new Set(superheros);
console.log(superherosSet)