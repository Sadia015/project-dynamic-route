import Link from "next/link"

function Nav(){
    return(
        <div>
            <header className="bg-gray-600 text-white w-full " >
            <nav className="flex list-none justify-center gap-20 h-20 items-center text-3xl">
                <li className=" ease duration-300 hover:text-red-600  cursor-pointer">
                  <Link href={"/"}>Home</Link></li>
                <li className=" ease duration-300 hover:text-red-600  cursor-pointer">
                <Link href={"/about"}>About</Link></li>
                <li className=" ease duration-300 hover:text-red-600  cursor-pointer">
                    <Link href={"/country"}>Countries</Link></li>
            </nav>
        </header>
        </div>
    )
}
export default Nav