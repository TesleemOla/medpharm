import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider=({children})=>{
    const [userAuth, setUserAuth ] = useState({})

    return (
        <AuthContext.Provider value={{ userAuth, setUserAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;