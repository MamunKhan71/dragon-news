import { useContext } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../Provider/ContextProvider";
import Header from "../components/Common/Header";
import RightSidebar from "../components/Home/RightSidebar";
import moment from "moment";
import Navbar from "../components/Common/Navbar";
const NewsDetails = () => {
    const userId = useParams()
    const { news } = useContext(NewsContext)
    const content = news.find(cat => cat.category_id === String(userId.id))
    return (
        <div className="bg-white h-dvh">
            <div className="container mx-auto">
                <Header />
                <Navbar/>
                <div className="grid grid-cols-4 gap-6 w-full mt-6">
                    <div className="col-span-3 w-full">
                        <div className="space-y-4">
                            <h1 className="font-bold text-[#403F3F] text-2xl">Dragon News</h1>
                            <div className="space-y-4 border rounded-md p-7">
                                <img className="w-full object-cover" src={content.image_url} alt="" />
                                <p className="font-bold text-2xl text-[#403F3F] pr-24">{content.title}</p>
                                <p className="text-justify text-lg">{content.details}</p>
                                <a href="#_" className="inline-flex btn-wide items-center px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
                                    Button Text
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                            </div>
                            <div>
                                <h1 className="font-bold text-[#403F3F] text-2xl">Editors Insight</h1>
                                <div className="grid grid-cols-3 w-full mt-6 gap-6">
                                    <div className="card card-compact bg-base-100 shadow-xl">
                                        <figure><img src="/src/assets/1.png" alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-lg">{content.title}</h2>
                                            <div className="flex gap-2 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p className="text-[#9F9F9F] font-medium">{moment(content.published_date).format('MMM D, YYYY')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-compact bg-base-100 shadow-xl">
                                        <figure><img src="/src/assets/2.png" alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-lg">{content.title}</h2>
                                            <div className="flex gap-2 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p className="text-[#9F9F9F] font-medium">{moment(content.published_date).format('MMM D, YYYY')}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-compact bg-base-100 shadow-xl">
                                        <figure><img src="/src/assets/3.png" alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title text-lg">{content.title}</h2>
                                            <div className="flex gap-2 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75" stroke="#9F9F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p className="text-[#9F9F9F] font-medium">{moment(content.published_date).format('MMM D, YYYY')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <RightSidebar />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsDetails;