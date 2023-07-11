import { useState } from 'react'
import AuthContext from './AuthContext'


const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token')
    const initialName=localStorage.getItem('email')
    const [Token,setToken]=useState(initialToken)
    const userIsLoggedIn = !!Token
    const [Email,setEmail]=useState(initialName)

    const LoginHandler=(token,email)=>{
        setToken(token)
        setEmail(email)
        localStorage.setItem('token',token)
        localStorage.setItem('email',email)
    }

    const LogoutHandler=()=>{
        setToken(null)
        setEmail(null)
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }

    const value={
        email:Email,
        token : Token,
        isLoggedIn : userIsLoggedIn ,
        login : LoginHandler ,
        logout : LogoutHandler,
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider