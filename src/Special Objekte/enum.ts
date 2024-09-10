//===============================
//          Enum
//===============================
console.log('%c Enum lvl 1 1 ', 'background: #222; color: #bada55');

enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Weekday.Monday);
console.log(Weekday.Tuesday);
console.log(Weekday.Wednesday);
console.log(Weekday.Thursday);
console.log(Weekday.Friday);
console.log(Weekday.Saturday);
console.log(Weekday.Sunday);

for (const days in Weekday) {
    //hiermit frage ich ab ob aus der typ conversion ein NaN bekomme um die indizis des loops raus zu bekommen
    if (isNaN(Number(days))) {
        console.log(days)
    }
}

//===============================
//          Enum
//===============================
console.log('%c Enum lvl 1 2 ', 'background: #222; color: #bada55');

enum PizzaSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    Family = "Family"
}

enum PizzaIngredients {
    Cheese = "Cheese",
    Onion = "Onion",
    Salami = "Salami"
}

type Pizza = {
    size: PizzaSize;
    ingredient: PizzaIngredients;
}

const PizzaOne: Pizza = {
    size: PizzaSize.Small,
    ingredient: PizzaIngredients.Cheese
}

const PizzaTwo: Pizza = {
    size: PizzaSize.Medium,
    ingredient: PizzaIngredients.Onion
}
console.log(PizzaOne)
console.log(PizzaTwo)

//===============================
//          Enum
//===============================
console.log('%c Enum lvl 2 1 ', 'background: #222; color: #bada55');

enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

const showHtmlError = (): void => {
    const generateRandomError: number = Math.ceil(Math.random() * 4);
    switch (generateRandomError) {
        case 1:
            console.log(HtmlError.OK);
            break;
        case 2:
            console.log(HtmlError.Redirect);
            break;
        case 3:
            console.log(HtmlError.BadRequest);
            break;
        case 4:
            console.log(HtmlError.InternalServerError);
            break;
    }
}

showHtmlError();
showHtmlError();
showHtmlError();
showHtmlError();


//===============================
//          Enum
//===============================
console.log('%c Enum lvl 2 2 ', 'background: #222; color: #bada55');

enum ClothingColor {
    Gelb,
    Orange,
    Pink,
    Lila
}

const allColors: string[] = ["#ffff00", "#ffa81a", "#ffb5fc", "#8300c8"];

for (const color in ClothingColor) {
    if (isNaN(Number(color))) {
        console.log("Die Farbe ist : " + color)
    } else {
        const button = document.createElement("button");
        button.textContent = "Ich bin ein Button";
        button.style.backgroundColor = allColors[Number(color)];

        document.querySelector("section")?.appendChild(button);
    }
}