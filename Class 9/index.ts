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

function task1(callback: (text: string) => void) {
  console.log("Do something");
  callback("We are passing values to the function");
}

function callback(text: string) {
  console.log("this is a callback function ", text);
}

task1(callback);
