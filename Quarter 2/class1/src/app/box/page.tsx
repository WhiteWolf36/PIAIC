import React from "react";

function page() {
  return (
    <>
      <div className="m-10 flex space-x-2 justify-center">
        <button className="p-5 font-bold bg-red-300">card 1</button>
        <button className="p-5 font-bold bg-green-300">card 2</button>
        <button className="p-5 font-bold bg-blue-300">card 3</button>
        <button className="p-5 font-bold bg-gray-300">card 4</button>
      </div>
      <div className="m-10 flex space-x-2 justify-start">
        <button className="p-5 font-bold bg-red-300">card 1</button>
        <button className="p-5 font-bold bg-green-300">card 2</button>
        <button className="p-5 font-bold bg-blue-300">card 3</button>
        <button className="p-5 font-bold bg-gray-300">card 4</button>
      </div>
      <div className="m-10 flex space-x-2 justify-end">
        <button className="p-5 font-bold bg-red-300">card 1</button>
        <button className="p-5 font-bold bg-green-300">card 2</button>
        <button className="p-5 font-bold bg-blue-300">card 3</button>
        <button className="p-5 font-bold bg-gray-300">card 4</button>
      </div>
      <div className="m-10 flex space-x-2 justify-between">
        <button className="p-5 font-bold bg-red-300">card 1</button>
        <button className="p-5 font-bold bg-green-300">card 2</button>
        <button className="p-5 font-bold bg-blue-300">card 3</button>
        <button className="p-5 font-bold bg-gray-300">card 4</button>
      </div>
      <div className="m-10 flex space-x-2 justify-around">
        <button className="p-5 font-bold bg-red-300">card 1</button>
        <button className="p-5 font-bold bg-green-300">card 2</button>
        <button className="p-5 font-bold bg-blue-300">card 3</button>
        <button className="p-5 font-bold bg-gray-300">card 4</button>
      </div>
      <div className="m-10 flex space-x-2 justify-evenly">
        <button className="p-5 font-bold bg-red-300">card 1</button>
        <button className="p-5 font-bold bg-green-300">card 2</button>
        <button className="p-5 font-bold bg-blue-300">card 3</button>
        <button className="p-5 font-bold bg-gray-300">card 4</button>
      </div>
    </>
  );
}

export default page;
