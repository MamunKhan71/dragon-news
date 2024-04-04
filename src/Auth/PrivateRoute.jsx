import { useContext } from "react";
import { NewsContext } from "../Provider/ContextProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(NewsContext)
    console.log(user);
    if(user){
        return children;
    }
    else{
        return <Navigate to="/login"></Navigate>;
    }
};

export default PrivateRoute;