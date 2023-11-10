import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center bg-gray-300">
        <div className="mx-4 order-last self-center">
          <Image
            className="rounded-full"
            src={"/gojo.jpg"}
            alt=""
            width={80}
            height={80}
          ></Image>
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl first-letter:text-yellow-600 font-bold text-blue-600 hover:text-gray-600 hover:cursor-pointer ">
            Modern Problems
          </h1>
          <h2 className="text-3xl font-semibold text-blue-400 hover:pe-8 hover:cursor-help">
            Requires Modern Solution
          </h2>
          <button className="my-4 px-4 py-2 bg-blue-500 rounded-lg text-white  border-2 border-black ">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}
