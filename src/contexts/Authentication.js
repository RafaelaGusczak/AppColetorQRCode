import { createContext, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../services/ConexaoFirebase";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [isSignIn, setIsSignIn] = useState(false)

    function SignIn(email, senha) {

        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                setIsSignIn(true) 
                const user = userCredential.user;
                ("Você está logado")
                console.log(user)
            })
            .catch((err) => console.log(err))
    }

    function Logout() {
        signOut(auth);
        setIsSignIn(false)
    }

    return (
        <AuthContext.Provider value={{ SignIn, isSignIn, Logout }}>
            {children}
        </AuthContext.Provider>
    )
    
}
