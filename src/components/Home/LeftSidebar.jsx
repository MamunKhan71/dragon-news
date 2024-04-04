import moment from "moment";
import { useContext } from "react";
import { NewsContext } from "../../Provider/ContextProvider";

const LeftSidebar = () => {
    const {news, category} = useContext(NewsContext)
    return (
        <div className="space-y-4 sticky">
            <h1 className="font-bold text-[#403F3F]">All Category</h1>
            <div className="bg-[#E7E7E7] text-[#403F3F] p-4 rounded-md text-center font-bold">
                <p>National News</p>
            </div>
            <div className="flex items-center justify-center">
                <div className="text-[#9F9F9F] text-xl font-medium space-y-7">
                    {
                        category.map(cat => <><p className="hover:cursor-pointer hover:animate-pulse">{cat.name}</p></>)
                    }
                </div>
            </div>
            <div className="space-y-4">
                {
                    news.slice(3, 6).map(nws => (
                        <>
                            <div className="space-y-4">
                                <img className="w-full object-cover" src={nws.image_url} alt="newsImage" />
                                <h1 className="font-bold text-lg">{nws.title}</h1>
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold">{category.find(cat => cat.id === nws.category_id || "").name}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p className="text-[#9F9F9F] font-medium">{moment(nws.author.published_date).format('MMM D, YYYY')}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftSidebar;