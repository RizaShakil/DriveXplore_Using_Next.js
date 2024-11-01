import Link from "next/link";
import Navbar from "../navbar/page";

function LandCruiser(){
    return(
        <>
        <Navbar />
        <div className="bg-gradient-to-bl from-slate-50 to-slate-800 h-screen pt-10">
            <div>
                <h1 className="text-4xl italic pt-5 pb-4 font-semibold text-center text-slate-950">Toyota Land Cruiser 2024 Price in Pakistan, Pictures & Reviews</h1>
            </div>
            <div className="justify-self-center  bg-transparent hover:scale-110 border-black">
                <img src="/Land_Cuiser_Remove.png"alt="" />
            </div>
            <div>
                <p className="text-center text-4xl font-bold ">_________________________________________________________________</p>
            </div>
            <div>
                <h1 className="text-4xl pt-7 text-slate-950 text-center font-semibold italic">Vehical Description</h1>
            </div>
            <div>
                <p className="text-2xl text-center italic font-medium text-black pl-16 pr-16">The Toyota Land Cruiser is a powerful, full-size SUV renowned for its durability and off-road capabilities. With a rugged build and advanced 4x4 systems, it handles challenging terrains with ease, making it a top choice for adventurers. Inside, the Land Cruiser offers a luxurious and spacious cabin with high-end materials, ensuring comfort on long journeys. Its blend of reliability, performance, and refinement has made it an icon in the SUV segment.</p>
            </div>
            <div className="pt-3">
                <center><button className="text-white italic bg-slate-950 pt-3 pb-3 px-8 rounded-lg hover:bg-black  text-3xl">Buy Now</button></center>
            </div>
        </div>
        <div className=" bg-slate-950 py-3 text-white">
               <h1 className="items-center font bold text-3xl italic text-center">Riza Shakeel!!</h1>
               <h2 className="font-semibold py-1 text-center italic text-2xl">Home_Work_GIAIC</h2>       
           </div>
        </>
    )
}
export default LandCruiser;