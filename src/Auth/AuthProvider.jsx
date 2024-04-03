import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../utils/firebase.config";
import { createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authValues = [createNewUser]
    return (
        <div>
            <AuthContext.Provider value={authValues}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;