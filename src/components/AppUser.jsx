import React, {useContext}  from 'react'

import { Login } from './Login'
import { ThemeContext } from '../context/ThemeContext'
import { ButtonTheme } from './ButtonTheme'
import { LoginContext } from '../context/LoginContext '
import { ButtonComp } from './ButtonComp'

// import { LoginProvider } from '../context/LoginContext '


export const AppUser = () => {
        
        const  {   isDay, setIsDay,    theme, setTheme} = useContext(ThemeContext)
        const   {user, setUser, password, setPassword, isLoggedIn,  setIsLoggedIn }    = useContext( LoginContext);

        console.log(  isDay,    theme   );
        return (

                !isLoggedIn ?
                <div style  =  {  {...theme, height:"100vh"   }   }>

                        {/* <LoginProvider> */}
                                <Login/>
                                <ButtonTheme/>
                        {/* </LoginProvider> */}

                        
                </div>: 
                <div style  =  {  {...theme, height:"100vh"   }   }       >
                        <h1> Welcome '{user }'</h1>

                        <ButtonComp/>
                        <ButtonTheme/>
                </div>


               
        )
}
