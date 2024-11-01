import HondaBrv from "../hondaBRV/page";
import Hondacivic from "../hondaCivic/page";
import LandCruiser from "../landcruiser/page";
import Tucson from "../tucson/page";

function services(){
    return (
        <>
        <div className="bg-slate-400">
        <div className="pb-4  ">
        <HondaBrv />
        </div>
        <div className="pb-4">
        <Hondacivic />
        </div>
        <div className="pb-4">
        <LandCruiser />
        </div>
        <div className="pb-4">
        <Tucson />
        </div>
        </div>
        </>
    )
}
export default services;
