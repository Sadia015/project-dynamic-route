import Link from "next/link";
import Nav from "@/components/nav";
export default function Country(){

    return(
        
        <div>
               <Nav/>
        
            <h1 className="text-4xl flex justify-center text-white ease duration-300 hover:text-blue-500 cursor-pointer font-bold py-2 ">Countries Details</h1>
            <ul className=" list-none flex justify-center flex-col items-center gap-16 py-6 text-white text-center "> 
                <li className="text-lg py-2 bg-slate-500 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110 ">
                  <Link className="p-4 py-1" href={"/country/pakistan"}> Pakistan </Link></li>

                <li className="text-lg py-2 bg-slate-500 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                <Link className="p-4 py-1"  href={"/country/russia"}>Russia</Link></li>

                <li className="text-lg py-2 bg-slate-500 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                <Link className="p-4 py-1"  href={"/country/america"}>America</Link></li>

                <li className="text-lg py-1 bg-slate-500 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                <Link className="px-4 py-1 flex justify-center items-center"  href={"/country/turkey"}>Turkey</Link></li>

                <li className="text-lg py-1 bg-slate-500 rounded-lg w-28 duration-100 hover:ease-linear hover:scale-110">
                <Link className="px-4 py-1 flex justify-center items-center"  href={"/country/india"}>India</Link></li>
            </ul>
        </div>
     
    
    )
}