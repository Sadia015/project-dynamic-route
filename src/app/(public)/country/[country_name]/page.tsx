
import React from 'react';
import Link from "next/link";

  export default function CountryName({ params }: { params: { country_name: string } }) {
    // ...
  
  const Countries: { 
    name: string;
    capital: string;
    population: number;
    // ...
  }[]=[

       {
        name: "Pakistan",
        population: 88092400374,
        capital: "Islamabad",
      },
       {
        name: "Russia",
        population: 53871362115,
        capital: "Moscow",
      },
       {
        name: "America",
        population: 124494116876,
        capital: "Washington, D.C",
      },
      {
        name: "Turkey",
        population: 31736367294,
        capital: "Ankara",
      },
      {
        name: "India",
        population: 1450935791,
        capital: "New Delhi",
      },
    ]
    
   function FindCountry(country_url: string) {
      return Countries.find(country=>country.name.toLowerCase() == country_url.toLowerCase())
    }

    const result =FindCountry(params.country_name)
  if (result) return (
    <>
    <div className="w-max h-max bg-gray-300 shadow-2xl shadow-red-400 py-8 px-14 m-auto mt-60 rounded-3xl font-bold">
      <h1 className="text-4xl  flex justify-center  py-2 px-50 mb-2 text-gray-600 ease duration-300 hover:text-blue-600  cursor-pointer font-bold">Details about Countries</h1>
      <div className="text-3xl py-2 ">Name :{result.name}</div>
       <div className="text-3xl py-2">Capital :{result.capital}</div>
       <div className="text-3xl py-2">Population :{result.population}</div>

       <button className="bg-blue-800 ml-36 mt-10 px-4 py-1 rounded-full duration-100 text-white hover:ease-linear hover:scale-110 ">
         <Link href={"/country"}>Back</Link>
     </button>
    </div>
    
    </>
  )
}


