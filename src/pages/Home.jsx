import Header from "../components/Common/Header";
import Navbar from "../components/Common/Navbar";
import MainContent from "../components/Home/MainContent";
import RightSidebar from "../components/Home/RightSidebar";
import LeftSidebar from "../components/Home/LeftSidebar";
const Home = () => {
    return (
        <div className="bg-white">
            <div className="h-dvh container mx-auto">
                <Header />
                <Navbar />
                <div className="grid grid-cols-4 gap-6">
                    <LeftSidebar/>
                    <MainContent/>
                    <RightSidebar/>
                </div>
            </div>
        </div>
    );
};

export default Home;