"use strict";
// console.log("Task 1");
// setTimeout(() => {
//   console.log("Task 2");
// }, 2000);
// console.log("Task 3");
// setTimeout(() => {
//   console.log("Task 4");
// }, 2000);
// console.log("Task 5");
//=====================================
//Weekend
//1- Car maintainence
//2- Do some grossery
//3- Laundry dress
//4- Attend an event
// setTimeout(() => {
//   console.log("Car maintainainence");
// }, 2000);
// setTimeout(() => {
//   console.log("Do some grossey");
// }, 2000);
// setTimeout(() => {
//   console.log("TLaundry dress");
// }, 2000);
// setTimeout(() => {
//   console.log("Attend an event");
// }, 2000);
//=========================
//Callbacks
//what is a callback?
//pass a function wihtin a function as a parameter
// function task1(callback: (text: string) => void) {
//   console.log("Do something");
//   callback("We are passing values to the function");
// }
// function callback(text: string) {
//   console.log("this is a callback function ", text);
// }
// task1(callback);
// function carMaintainance() {
//   console.log("I left my car at 9 at workshop");
//   setTimeout(() => {
//     console.log("Car is fixed");
//     return "Your car is ready to pickup";
//   }, 2000);
// }
// function pickDress() {
//   setTimeout(() => {
//     return "Your dress is ready to pickup";
//   }, 1000);
// }
// let mechanicResponse = carMaintainance();
// console.log(mechanicResponse);
// setTimeout(() => {
//   console.log("Do some grossery");
// }, 2000);
// let laundryResponse = pickDress();
// console.log(laundryResponse);
// setTimeout(() => {
//   console.log("Attend event");
// }, 2000);
//========================
function carMaintainance(callback) {
    console.log("I left my car at 9 at workshop");
    setTimeout(() => {
        console.log("Car is fixed");
        callback("Your car is ready to pickup");
    }, 2000);
}
function pickDress(callback) {
    setTimeout(() => {
        console.log("Your dress is ready to pickup");
        callback("Pick your dress");
    }, 1000);
}
setTimeout(() => {
    console.log("Do some grossery");
}, 1000);
function attendEvent() {
    console.log("You can now attend the event now!");
}
function carMainCallback(text) {
    console.log(`Car Maintaince Callback...... ${text}`);
    pickDress(dressCallback); //We call it because we need the car to pick the dress and this function would only be called after the car is fixed
}
function dressCallback(text) {
    console.log("Dress callback... ", text);
    attendEvent();
}
carMaintainance(carMainCallback);
