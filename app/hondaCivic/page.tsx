import Link from "next/link";
import Navbar from "../navbar/page";

function Hondacivic(){
    return(
        <>
        <Navbar />
        <div className="bg-gradient-to-bl from-slate-50 to-slate-800 h-screen pt-10">
            <div>
                <h1 className="text-4xl italic pt-5 pb-4 font-semibold text-center text-slate-950">Honda Civic 2024 Price in Pakistan, Images, Specs & Features</h1>
            </div>
            <div className="justify-self-center  bg-transparent hover:scale-110 border-black">
                <Link href=""><img src="Honda_Civic_Removed.png" alt="" /></Link>
            </div>
            <div>
                <p className="text-center text-4xl font-bold ">_________________________________________________________________</p>
            </div>
            <div>
                <h1 className="text-4xl pt-7 text-slate-950 text-center font-semibold italic">Vehical Description</h1>
            </div>
            <div>
                <p className="text-2xl italic text-center font-medium text-black pl-16 pr-16">The Honda Civic is a popular compact car known for its sleek design, fuel efficiency, and reliability. It offers a comfortable and modern interior with advanced tech features, providing an enjoyable driving experience for both city and highway travel. With responsive handling and a reputation for long-lasting performance, the Civic appeals to a wide range of drivers. Its balance of style, practicality, it a favorite in the sedan market.</p>
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
export default Hondacivic;