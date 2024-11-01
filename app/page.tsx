import Image from "next/image";
import Navbar from "./navbar/page";
import HeroPage from "./heropage/page";
import contact from "./order/page";
import order from "./order/page";
import ThankYou from "./thankyou/page";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroPage/>
    </>
  );
  }
