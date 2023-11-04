import React from "react";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="flex flex-col items-center p-10 space-x-2 container justify-center bg-gradient-to-l from-black to-white">
        <div className=" text-6xl text-blue-700 font-bold">
          Welcome to NorthBy
        </div>
        <div className="flex space-x-4 text-2xl mt-2 text-blue-500">
          <span>A premium insight and sound</span>
          <Image
            className="rounded-full"
            src={"/gojo.jpg"}
            alt={""}
            width={80}
            height={80}
          ></Image>
        </div>
        <button className="rounded-lg p-2 mt-3 bg-blue-700 text-white">
          Learn More
        </button>
      </div>
    </>
  );
}

export default page;
