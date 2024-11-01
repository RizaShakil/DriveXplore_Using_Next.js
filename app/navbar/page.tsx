
import Link from "next/link";

function Navbar() {
    return (
        <div>
           <nav className="bg-slate-950  text-yellow-50  py-6 px-6 justify-between  items-center flex   ">
            <div>
                <h1 className="text-4xl italic font-bold ">
                     < a href="/" >DriveXplore </a>
                </h1>
            </div>
            <div>
                <ul className="flex justify-around space-x-7  italic text-3xl font-thin px-5 items-center   ">
                    <Link href="/about">About</Link>
                    <Link href ="/services">Services</Link>
                    <Link href="/order">Order Now </Link>
                </ul>   
            </div>
           </nav>
        </div>
    );
}
export default Navbar;