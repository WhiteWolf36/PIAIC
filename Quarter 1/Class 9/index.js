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
//Callbacks
// function carMaintainance(callback: (text: string) => void) {
//   console.log("I left my car at 9 at workshop");
//   setTimeout(() => {
//     console.log("Car is fixed");
//     callback("Your car is ready to pickup");
//   }, 2000);
// }
// function pickDress(callback: (text: string) => void) {
//   setTimeout(() => {
//     console.log("Your dress is ready to pickup");
//     callback("Pick your dress");
//   }, 1000);
// }
// setTimeout(() => {
//   console.log("Do some grossery");
// }, 1000);
// function attendEvent(callback: (text: string) => void) {
//   setTimeout(() => {
//     console.log("You can now attend the event now!");
//     callback("Go home");
//   }, 2000);
// }
// function goHome() {
//   console.log("Reached Home");
// }
//Callback Hell problem (A pyramid)
// carMaintainance(function (text: string) {
//   console.log(`Car Maintaince Callback...... ${text}`);
//   pickDress(function (text: string) {
//     console.log("Dress callback... ", text);
//     attendEvent(function eventCallback(text: string) {
//       console.log("Event callback... ", text);
//       goHome();
//     });
//   });
// });
//==========================================================
//Promises
function carMaintainance() {
    console.log("I left my car at 9 in workshop");
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Car is fixed");
            resolve("Your car is ready to pickup"); // We use resolve instead of callbacks to get the resolved promises
        }, 2000);
    });
    return result;
}
function pickDress() {
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your Dress is ready");
            resolve("Pickup your dress");
        }, 2000);
    });
    return result;
}
let mechanicResponse = carMaintainance();
mechanicResponse
    .then((text) => {
    console.log(`Mechanic Response... ${text}`);
    return pickDress();
})
    .then((text) => {
    console.log("Laundry Response... ", text);
})
    .catch((err) => {
    console.log("The promise is rejected... ", err);
});
//Another Approach
// carMaintainance().then((text: string) => {
//   console.log("Mechanic Response... ", text);
//   pickDress().then((text: string) => {
//     console.log("Laundry Response... ", text);
//   });
// });
//Resolve and Reject
// function promise(num: number) {
//   let result: Promise<string> = new Promise((resolve, reject) => {
//     if (num >= 5) {
//       resolve("Promise is resolved here...");
//     } else {
//       reject("Promise is rejected here...");
//     }
//   });
//   return result;
// }
// promise(4)
//   .then((text: string) => {
//     console.log("Resolved... ", text);
//   })
//   .catch((err) => {
//     console.log("Rejected... ", err);
//   });
