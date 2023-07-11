import { useState } from 'react'
import AuthContext from './AuthContext'


const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token')
    const [Token,setToken]=useState(initialToken)
    const userIsLoggedIn = !!Token

    const LoginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('token',token)
    }

    const LogoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
    }

    const value={
        token : Token,
        isLoggedIn : userIsLoggedIn ,
        login : LoginHandler ,
        logout : LogoutHandler
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider