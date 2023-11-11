import React from "react";

function Class2() {
  return (
    <>
      {/* <div className="m-10 flex justify-between">
        <button className="p-2 text-white rounded-md border-black bg-red-600">
          Button 1
        </button>
        <button className="p-2 text-white rounded-md border-black bg-red-600">
          Button 2
        </button>
      </div> */}

      <div className="flex justify-center items-center h-screen w-screen bg-gray-300">
        <div className="p-4 flex flex-col gap-4 w-[200px] bg-white shadow-lg rounded-md">
          <div>
            <h1 className="font-extrabold text-2xl text-blue-400">Some css</h1>
          </div>
          <div>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis
              sint ea aut nesciunt, modi repudiandae iusto voluptates sapiente
              saepe dolor accusamus, officia cum? Aliquid blanditiis id neque
              distinctio quam!
            </p>
          </div>
          <div className="flex justify-between text-sm ">
            <button className="bg-gray-200 p-1 rounded-md">Next</button>
            <button className="bg-gray-200 p-1 rounded-md">Previous</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Class2;
