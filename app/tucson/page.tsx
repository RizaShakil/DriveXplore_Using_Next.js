import Link from "next/link";
import Navbar from "../navbar/page";

function Tucson(){
    return(
        <>
        <Navbar />
        <div className="bg-gradient-to-bl from-slate-50 to-slate-800 h-screen pt-10">
            <div>
                <h1 className="text-4xl italic pt-3 pb-4 font-semibold text-center text-slate-950">Hyundai Tucson Price in Pakistan 2024, Images, Reviews & Specs</h1>
            </div>
            <div className="justify-self-center  bg-transparent hover:scale-110 border-black">
                <img src="/Tuson_remove.png"alt="" />
            </div>
            <div>
                <p className="text-center text-4xl font-bold ">_________________________________________________________________</p>
            </div>
            <div>
                <h1 className="text-4xl pt-7 text-slate-950 text-center font-semibold italic">Vehical Description</h1>
            </div>
            <div>
                <p className="text-2xl text-center italic font-medium text-black pl-16 pr-16">The Hyundai Tucson is a compact SUV that blends style, performance, and advanced technology. With a spacious interior and premium materials, it provides a comfortable and refined ride for drivers and passengers alike. Known for its smooth handling and fuel efficiency, the Tucson is also equipped with cutting-edge safety features for peace of mind. Its bold design and modern amenities make it a top choice among compact SUVs.</p>
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
export default Tucson;