import Link from "next/link"
import Navbar from "../navbar/page";

function ThankYou(){
    return(
        <>
        <Navbar/> 
        <div className="h-screen pt-44 bg-gradient-to-bl from-slate-50 to-slate-800 ">
             <center>
                <h1 className="text-7xl italic pb-10 pt-20 text-slate-950 font-bold">Thank You For Shopping...!!</h1>
                <p className="text-3xl italic pb-10 font-medium">Your order will be recieved in 7 working days...... Have a nice day..</p>
                <Link href="/"><button className=" rounded-3xl py-6 px-12 bg-slate-950 italic hover:bg-black text-white text-4xl">Go Back</button></Link>
             </center>
        </div>
        <div className=" ju bg-slate-950 py-3 text-white">
               <h1 className="items-center font bold text-3xl italic text-center">Riza Shakeel!!</h1>
               <h2 className="font-semibold py-1 text-center italic text-2xl">Home_Work_GIAIC</h2>       
           </div>
        </> 
    )
}

export default ThankYou;