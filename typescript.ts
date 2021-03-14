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