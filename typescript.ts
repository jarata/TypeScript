function sum(a, b) {
    return a + b;
}

const answer = sum(4, 5);
console.log(answer);

const sum2 = (a, b) => {
    return a + b;
}
const answer2 = sum2(5, 6);
console.log(answer2);

const sum3 = (a: number, b: number) => {
    return a + b;
}

const answer3 = sum3(6, 7);
console.log(answer3);

// boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let favoriteQuote: string = `I am ${age} years old`;

// arrays
let pets: string[] = ["pig", "dog", "cat"];
let birds: Array<string> = ["seagull", "sparrow", "pidgeon"];

let wizard: object = {
    a: 'John'
}

// null or undefined
let meh: undefined = undefined
let no: null = null;