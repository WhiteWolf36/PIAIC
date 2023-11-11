import React from "react";

function page() {
  return (
    <>
      <div className="flex flex-col bg-blue-400 p-4 flex-wrap">
        <input type="text" className="w-32" />
        <button className="w-32 bg-yellow-400 self-center  hover:bg-purple-600 hover:underline hover:text-white transition-all duration-[1500ms]">
          button 1
        </button>
        <button className="w-32 bg-red-400 ">button 2</button>
      </div>
    </>
  );
}

export default page;
