function sum(a, b) {
    return a + b;
}
var answer = sum(4, 5);
console.log(answer);
var sum2 = function (a, b) {
    return a + b;
};
var answer2 = sum2(5, 6);
console.log(answer2);
var sum3 = function (a, b) {
    return a + b;
};
var answer3 = sum3(6, 7);
console.log(answer3);
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = "brown";
var favoriteQuote = "I am " + age + " years old";
// arrays
var pets = ["pig", "dog", "cat"];
var birds = ["seagull", "sparrow", "pidgeon"];
var wizard = {
    a: 'John'
};
// null or undefined
var meh = undefined;
var no = null;
// tuple
var basket;
basket = ["hello", 5];
// enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
var sizeName = Size[2];
// any
var whatever = "blahh blahh";
whatever = true;
// void
var sing = function () {
    console.log("la la la");
};
// never
var error = function () {
    throw Error('help!');
};
var fightRobotArmy = function (robots) {
    console.log("Fight");
};
var fightRobotArmy2 = function (robots) {
    console.log("Fight2");
};
var dog = {};
dog.count;
// function
var fightRobotArmy3 = function (robots) {
    console.log("Fight!!!");
};
var fightRobotArmy4 = function (robots) {
    console.log("Fight!!!");
    return 5;
};
// class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("RAAAWR");
console.log(lion.sing);
console.log(lion.greet());
// union
var confused = 'hello';
