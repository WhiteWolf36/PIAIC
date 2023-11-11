import React from "react";

function page() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-gray-300">
        <div className=" flex-col bg-white shadow-xl rounded-md w-[400px]">
          <div className="p-4">
            <h1 className="text-blue-400 text-4xl font-bold">
              Join our community
            </h1>
            <div className="text-green-400 mt-1">
              30 day hassle free money back guarentee
            </div>
            <div className="text-gray-400 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              aliquam. Architecto aperiam id cum doloremque, nam soluta, in
              deleniti magni nisi alias ex sapiente adipisci minus eius aliquid.
              Amet, odio?
            </div>
          </div>
          <div className="flex ">
            <div className="flex-grow p-4 bg-teal-500">
              <div className="font-bold text-white">
                <h1>Monthly Subscription</h1>
              </div>
              <div className="text-white">
                <h1 className="font-bold text-3xl">$29 Month </h1>
                <span className="text-sm">per month</span>
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="flex-grow p-4 text-white bg-teal-400">
              <h1 className="font-bold">Why us</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
