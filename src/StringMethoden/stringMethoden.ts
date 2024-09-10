//===============================
//          lvl 1 2
//===============================
console.log('%c lvl 1 2 ', 'background: #222; color: #bada55');
const earthQuote = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(earthQuote.indexOf("h"));
console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon"));

//===============================
//          lvl 1 3
//===============================
console.log('%c lvl 1 3 ', 'background: #222; color: #bada55');
let oceanQuote = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(oceanQuote.search(";"));
console.log(oceanQuote.search("green"));
console.log(oceanQuote.search("blue"));

//===============================
//          lvl 1 4
//===============================
console.log('%c lvl 1 4 ', 'background: #222; color: #bada55');
const susisStatus = 'Susi is going to codingschool';

console.log(susisStatus.slice(0,4));
console.log(susisStatus.slice(susisStatus.indexOf("is"), susisStatus.indexOf("is") + 2));
console.log(susisStatus.slice(susisStatus.indexOf("is"), susisStatus.indexOf("coding")).concat(susisStatus.slice(susisStatus.indexOf("school"))));
console.log(susisStatus.slice(susisStatus.indexOf("school")));
console.log(susisStatus.slice(0,4).concat(" " + susisStatus.slice(susisStatus.indexOf("is"), susisStatus.indexOf("is") + 2)).concat(" " + susisStatus.slice(susisStatus.indexOf("school"))));

//===============================
//          lvl 1 7
//===============================
console.log('%c lvl 1 7 ', 'background: #222; color: #bada55');

let samsStatus = "Sam is good at codingschool";

const sam1 = samsStatus.replace("good", "bad").replace("codingschool", "school");
const susi1 = samsStatus.replace("Sam", "Susi").replace("codingschool", "school");
const sam2 = samsStatus.replace("codingschool", "tennis");
console.log(sam1);
console.log(susi1);
console.log(sam2);

//===============================
//          lvl 1 12
//===============================
console.log('%c lvl 1 12 ', 'background: #222; color: #bada55');

let text: string = 'Birdie birdie in the sky laid a turdie in my eye. If cows could fly I’d have a cow pie in my eye.'

console.log(text.search("sky"));
console.log(text.search(/s/));
console.log(text.search(/k/));
console.log(text.search(/b/));
console.log(text.search(/z/));