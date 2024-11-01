import Navbar from "../navbar/page";
import Link from "next/link";

function About(){
    return(
        <>
        <Navbar/>
        <div className="h-screen pt-48 bg-gradient-to-bl from-slate-50 to-slate-800">
            <div className="bg-transparent flex pt-10 justify-evenly">

                <div className="bg-transparent rounded-lg pt-4 px-10 border-4 border-black">
                       <img src="/Hond_BRV_Remove.png" className="w-60 h-48 hover:scale-125" alt=""></img>
                      <Link href="/hondaBRV"><h1 className="text-center italic pt-10 text-3xl font-semibold text-slate-950">Honda BR-V</h1></Link>
                       <h1 className="text-green-900 italic text-2xl pt-3 font-semibold text-center">PKR 63.0 lacs</h1>
                       <h1 className="text-center text-2xl italic  font-medium pt-4 text-slate-800">121 Reviews</h1>
                       <p className="text-amber-700 pb-1 text-center text-1xl font-bold">⭐⭐⭐⭐⭐</p> 
                </div>
                <div className="bg-transparent rounded-lg pt-4 px-10 border-4 border-black">
                       <img src="/Honda_Civic_Removed.png" className="w-60 h-48 hover:scale-125"></img>
                       <Link href="/hondaCivic"><h1 className="text-center italic pt-10 text-3xl font-semibold text-slate-950 ">Honda Civic</h1></Link>
                       <h1 className="text-green-900  italic text-2xl pt-3 font-semibold text-center">PKR 86.6 - 99.0 lacs</h1>
                       <h1 className="text-center text-2xl italic font-medium pt-4 text-slate-800"> 359 Reviews</h1>
                       <p className="text-amber-700 pb-1 text-center text-1xl font-bold">⭐⭐⭐⭐⭐</p>
                </div>
                <div className="bg-transparent rounded-lg pt-4 px-10 border-4 border-black">
                        <img src="/Land_Cuiser_Remove.png" className="w-60 h-48 hover:scale-125"></img>
                        <Link href="/landcruiser"><h1 className="text-center pt-10 italic text-3xl font-semibold text-slate-950"> Toyota Land Cruiser</h1></Link>
                        <h1 className="text-green-900 italic text-2xl pt-3 font-semibold text-center">PKR 12.0 crore</h1>
                        <h1 className="text-center italic text-2xl font-medium pt-4 text-slate-800">31 Reviews</h1>
                        <p className="text-amber-700 pb-1 text-center text-1xl font-bold">⭐⭐⭐⭐⭐</p>
                </div>
                <div className="bg-transparent rounded-lg pt-4 px-10 border-4 border-black">
                         <img src="/Tuson_remove.png" className="w-60 h-48 hover:scale-125"></img>
                         <Link href="/tucson"><h1 className="text-center italic  pt-10 text-3xl font-semibold text-slate-950"> Hayundai Tucson</h1></Link>
                         <h1 className="text-green-800 italic text-2xl pt-3 font-semibold text-center">PKR 73.2 - 89.1 lacs</h1>
                         <h1 className="text-center italic text-2xl font-medium pt-4 text-slate-800">30 Reviews</h1>
                         <p className="text-amber-700 pb-1 text-center text-1xl font-bold">⭐⭐⭐⭐⭐</p>
                </div>
            </div>
       </div>
       <div className=" ju bg-slate-950 py-3 text-white">
               <h1 className="items-center font bold text-3xl italic text-center">Riza Shakeel!!</h1>
               <h2 className="font-semibold py-1 text-center italic text-2xl">Home_Work_GIAIC</h2>       
           </div>
      </>
    )
}
export default About;