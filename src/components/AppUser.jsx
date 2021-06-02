import React, {useContext}  from 'react'

import { Login } from './Login'
import { ThemeContext } from '../context/ThemeContext'
import { ButtonTheme } from './ButtonTheme'
import { LoginContext } from '../context/LoginContext '
import { ButtonComp } from './ButtonComp'
import { UserProvider } from '../context/UserContext'

// import { LoginProvider } from '../context/LoginContext '

import {Card} from './Card.jsx';



export const AppUser = () => {
        
        const  {   isDay, setIsDay,    theme, setTheme} = useContext(ThemeContext)
        const   {user, setUser, password, setPassword, isLoggedIn,  setIsLoggedIn }    = useContext( LoginContext);

        console.log(  isDay,    theme   );
        return (

                !isLoggedIn ?
                <div style  =  {  {...theme, height:"100%"   }   }>

                        {/* <LoginProvider> */}
                                <Login/>
                                <ButtonTheme/>
                        {/* </LoginProvider> */}

                        
                </div>: 
                <div style  =  {  {...theme, height:"100%"   }   }       >

                        <UserProvider> 
                                <h1> Welcome '{user }'</h1>
                                <ButtonComp/>
                                <ButtonTheme/>

                                <Card>    </Card>
                        </UserProvider>
                </div>


               
        )
}
