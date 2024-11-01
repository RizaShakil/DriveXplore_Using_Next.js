import Link from "next/link";

function HeroPage() {
  return (
    <>
    
    <div className="bg-gradient-to-bl from-slate-50 to-slate-800 h-screen w-full">
      <h1 className="font-extrabold text-black pt-60 text-7xl italic flex items-center px-10 mb-4 ">Drive Your Passion, Find Your Ride!</h1>
      <p className="text-slate-900 mt-4 justify-center items-center italic text-3xl px-10 "> "Discover unbeatable deals on top-quality vehicles! From sleek sedans to rugged SUVs,<br /> find your dream car today and hit the road with confidence Start your adventure today <br />—your dream car is just a click away!"</p>
     <div className="pl-12 pt-7">
     <button className="py-5 px-7 mt-4 rounded-3xl items-center bg-slate-950 text-4xl text-w font-bold text-white  hover:bg-black transition ">Get Started</button>
    </div>
    <div className=" bg-slate-950 py-3 mt-56 text-white">
       <h1 className="items-center font bold italic text-3xl text-center">Riza Shakeel!!</h1>
       <h2 className="font-semibold py-1 text-center italic text-2xl">Home_Work_GIAIC</h2>       
    </div>
    </div>
    </>
  )
}
export default HeroPage;