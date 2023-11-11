import React from "react";

function page() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-gray-300">
        <div className=" flex-col bg-white shadow-xl rounded-md w-[500px]">
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
            <div className=" p-4 bg-teal-500">
              <div className=" p-2 font-bold text-white">
                <h1>Monthly Subscription</h1>
              </div>
              <div className="p-2 text-white">
                <span className="font-bold text-3xl">$29 </span>
                <span className="mx-2 text-sm">per month</span>
              </div>
              <div className="p-2">
                <span className="text-white text-sm">
                  Full access for less than $1 a day
                </span>
              </div>
              <div className="flex p-2 mt-2">
                <button className=" justify-center mx-auto px-10 text-white bg-green-500 p-2 rounded-md ">
                  SignUp
                </button>
              </div>
            </div>
            <div className="flex-grow p-4 text-white bg-teal-400">
              <h1 className="p-2 font-bold">Why us</h1>
              <ul className="text-sm mt-2 p-2">
                <li className="mt-1">Tutorial by Industry Experts</li>
                <li className="mt-1">Peer & expert code review</li>
                <li className="mt-1">Coding exercises</li>
                <li className="mt-1">Access to our Github Repos</li>
                <li className="mt-1">Community Forum</li>
                <li className="mt-1">Flashcard decks</li>
                <li className="mt-1">New videos every week</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
