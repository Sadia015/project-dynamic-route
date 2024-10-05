import Nav from "../components/nav";
import React from "react";

export default function Home() {
  return (
    <div>
      <Nav/>
    <div className="flex flex-col w-max mt-16">

      <h1 className="text-4xl  flex justify-center  ml-60 py-2 px-50 mb-2 text-white w-full ease duration-300 hover:text-purple-700  cursor-pointer font-bold">Welcome</h1>
      <h1 className="text-3xl flex justify-center ml-60  py-3 px-50 mb-2 text-white w-full ease duration-300 hover:text-red-700  cursor-pointer font-bold">My First Next.js Project</h1>
      <h1 className="text-3xl  flex justify-center ml-60 py-3 px-50 mb-2 text-white w-full ease duration-300 hover:text-blue-700  cursor-pointer font-bold">Application  Dynamic Route</h1>
    </div>
    </div>
  );
}
