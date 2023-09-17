"use strict";
let array = [1, 2, 3];
array.push(4);
console.log(array);
array = [1, 2, 3];
array.pop();
console.log(array);
array = [1, 2, 3];
array.shift();
console.log(array);
array = [1, 2, 3];
array.unshift(0);
console.log(array);
let strArray = ["a", "b"];
let newArray = strArray.concat("c");
console.log(newArray);
console.log(newArray.join("-"));
console.log(newArray.indexOf("b"));
console.log(newArray.includes("c"));
array = [3, 5, 6, 8];
let found = array.find((n) => {
    n % 2 === 0;
    return n;
});
console.log(found);
array = [2, 4, 3, 5];
found = array.findIndex((n) => {
    return n % 2 !== 0;
});
console.log(found);
array = [3, 4, 8, 6];
let numArray = array.map((n) => {
    return n * 2;
});
console.log(numArray);
array = [1, 4, 7, 8];
numArray = array.filter((n) => {
    return n % 2 === 0;
});
console.log(numArray);
array = [2, 4, 3, 7];
console.log(array.reduce((acc, cur) => {
    return acc + cur;
}));
array = [2, 3, 4, 5];
console.log(array.every((n) => {
    return n < 6;
}));
array = [3, 5, 6, 8];
console.log(array.some((n) => {
    return n < 6;
}));
array = [1, 2, 3, 4];
console.log(array.reverse());
// //Does not works in TypeScript only works on JavaScript
// array = [3, 5, 7, 8];
// console.log(array.at(-2));
