"use strict";
// https://www.youtube.com/watch?v=BCg4U1FzODs
var _a;
let id = 5;
let na = "YO";
let isPublished = true;
let x = 'Hello';
// type of 'any' can be changed later
let ids = [1, 2, 3, 4, 5];
//so you cant push string to ids
let arr = [1, 2, 3, 4, true];
//TUPLE
let person = [1, 'Kurs', true];
// the array expects the types in that particular order
//TUPLE ARRAY
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Josh']
];
//UNION
let pid;
//this can hold string or number
//ENUM  (must be in pascal case)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
//by default up down ... values will be 0, 1, 2, 3 ...
//you can change it: 
// enum Direction1 {
//   Up = 1,
//   Down,
//   Left,
//   Right
// }
//ENUM
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Kuersch'
};
//Type assertion
let cid = 1;
let customerId = cid;
// customerId = true ... ex wouldnt work
//Functions
cid = 'change';
function addNum(x, y) {
    return x + y;
}
//the 'number' after the paranthesis is for the return type
// so x + y is also a number
//if it doesnt return anything you can use void
function log(message) {
    console.log(message);
}
let age = 20;
if (age < 50) {
    age += 10;
}
console.log(age);
//in ts large underscore can be used with large numbers:
let year = 120300090;
// if we initialise the variables, we dont have to add : number or : string to it, because it is automatically assigned
// if we declare a variable and dont assign a type or a value to it, it is considered 'any'
function calculateIncome(income, taxYear) {
    if ((taxYear || 2022) < 2022) {
        return income * 0.14;
    }
    else {
        return income * 0.17;
    }
}
// the question mark in the type definition makes the argument optional
let employee2 = { id: 1 };
let employee3 = { id: 1, name: 'josh' };
// INTERSECTION TYPES
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
// LIMITING THE VARIABLES
let quantity;
//quantity can only be set to 50
let quantity2;
let quantity3 = 100;
// Wen we call the function that is set to accept a string as argument, we cannot pass null or undefined.
// this is "strictNullChecks": true in .json file. Can be set to false but it is not recommended
// instead include the null and undefined into the type definition
// THESE ARE CALLED NULLABLE TYPES
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
// customer?.birthday       is called =>          Optional property access operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//this way we can check if the customer is NOT undefined or null before chaining .birthday to it. Otherwise if the customer comes as undefined, undefined.birthday will break the code and ts doesnt allow this
// all af this can also be written like
// if (customer !== null && customer !== undefined) {
//   console.log(customer.birthday)
// }
// but this is kinda long and ugly
// We can also take it one step further:
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// this gets full year and shows it only if 1) customer is not null or undefined and 2) customer has a birthday
// OPTIONAL ELEMENT ACCESS OPERATOR
// customers?.[0]
//# sourceMappingURL=index.js.map