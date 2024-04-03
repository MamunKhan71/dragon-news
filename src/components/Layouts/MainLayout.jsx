import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="bg-[#F3F3F3] poppins">
            <Outlet/>
        </div>
    );
};

export default MainLayout;