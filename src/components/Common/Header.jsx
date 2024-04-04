import moment from "moment";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


const Header = () => {

    return (
        <div className="space-y-4">
            <div className="text-center space-y-4 pt-12">
                <h1 className="oldEng text-6xl text-[#444] ">The Dragon News</h1>
                <p className="text-[#706F6F] text-lg">Journalism Without Fear or Favour</p>
                <p className="text-[#706F6F] font-medium">{moment().format('dddd, MMMM d, YYYY')}</p>
            </div>
            <div className="bg-[#F3F3F3] p-3 flex gap-4 items-center rounded-md">
                <Link to="/login" className="relative inline-flex items-center justify-center px-10 font-bold rounded-md py-3 overflow-hidden font-mono tracking-tighter text-white bg-[#D72050]  group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1  opacity-30 bg-gradient-to-b rounded-md from-transparent via-transparent to-gray-700"></span>
                    <span className="relative text-xl">Latest</span>
                </Link>
                <Marquee pauseOnHover={true} className="font-semibold">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
            </div>
        </div>
    );
};

export default Header;