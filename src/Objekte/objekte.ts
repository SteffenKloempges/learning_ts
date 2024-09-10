//===================================
//      lvl 1_3
//===================================

console.log('%c lvl 1 3 ', 'background: #222; color: #bada55');


type Apple = {
    color: string;
    size: string;
    //isSweet: boolean; --> wenn hinzugefügt, müssen alle objekte die mit dem Type Apple sind auch isSweet haben
};

let redApple: Apple = { color: 'red', size: 'big' };
let greenApple: Apple = { color: 'green', size: 'small' };
let yellowApple: Apple = { color: 'yellow', size: 'big' };
let apples: Apple[] = [redApple, greenApple, yellowApple];

apples.forEach((apple) => console.log(apple.size));
console.log(apples.length);


let pinkApple: Apple = { color: "pink", size: "medium" };
apples.push(pinkApple);

//===================================
//      lvl 1_4
//===================================

console.log('%c lvl 1 4 ', 'background: #222; color: #bada55');