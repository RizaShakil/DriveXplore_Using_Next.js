import Link from "next/link";
import Navbar from "../navbar/page";

function order() {
    return(
        <>
        <Navbar />
        <div className="bg-gradient-to-bl from-slate-50 to-slate-800 pb-16 flex pt-16 justify-center ">
            <div className="p-5 rounded-lg shadow-lg mt-6 md-6 px-20  bg-yellow-50"> 
            <h1 className="text-black text-center  items-center italic font-semibold text-6xl">Vehical Order Form</h1>
            <form className="">  
               <div className="pt-10 px-2">
                    <label htmlFor="name"className="text-black text-4xl italic pb-4 font-semibold">Order Place By:</label>
                    <input type="text" id="name" placeholder="You..........." className="w-full px-3 py-4 italic text-2xl border rounded-lg " ></input>
               </div>
               <div className="pt-4 px-2">
                <label htmlFor="date"className="text-black text-4xl italic pb-4 font-semibold ">Date Of Order:</label>
                <input type="text" id="date" placeholder="MM-DD-YYYY" className="w-full px-3 py-4 text-2xl italic borfer rounded-lg"></input>
               </div>
               <div className="pt-4 px-2">
                <label htmlFor="text"className="text-black text-4xl italic pb-4 font-semibold ">Date Of Order:</label>
                <input type="text" id="date" placeholder="MM-DD-YYYY" className="w-full px-3 py-4 text-2xl italic borfer rounded-lg"></input>
               </div>
               <div className="pt-4 pb-4 px-2">
                     <label htmlFor="" className="text-black text-4xl italic pb-4 font-semibold">Vehical Type And Requirement:</label> <br />
                   <textarea id="address" className="w-full px-4 py-2 rounded-lg text-2xl " placeholder="Something Write Here...."></textarea>
               </div>
               <Link href="/thankyou">
               <center><div className="py-6">
                <button className="py-6 px-12 text-2xl hover:bg-black text-white rounded-3xl bg-slate-950">
                    Place Your Order
                </button>
               </div></center></Link>
               </form>
            </div>
        </div>
        <div className=" ju bg-slate-950 py-3 text-white">
               <h1 className="items-center font bold italic text-3xl text-center">Riza Shakeel!!</h1>
               <h2 className="font-semibold py-1 italic text-center text-2xl">Home_Work_GIAIC</h2>       
           </div>
       
        </> 
    )
}
export default order;