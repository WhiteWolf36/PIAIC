import React from "react";

function page() {
  return (
    <>
      <div className="flex p-4 bg-blue-300 flex-wrap">
        <input type="text" className=" grow" />
        <button className="bg-red-300 hover:bg-purple-600 hover:underline hover:text-white transition-all duration-1000">
          Click Me
        </button>
      </div>
      <div className="flex h-screen p-4 bg-blue-300 flex-wrap">
        <input type="text" className=" grow-[2]" />
        <button className="bg-red-300 grow-[1] order-last">Click Me</button>
        <button className="bg-yellow-400 grow-[3]">Button 2</button>
      </div>
      <footer className="bg-gray-400 text-white text-clip text-center sticky bottom-0">
        Footer
      </footer>
    </>
  );
}

export default page;

//Min height= min rehegi is sy zayada ho skti hai
// Max is sy zayada ni ho skti
