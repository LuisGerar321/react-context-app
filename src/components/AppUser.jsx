import React, {useContext}  from 'react'

import { Login } from './Login'
import { ThemeContext } from '../context/ThemeContext'
import { ButtonTheme } from './ButtonTheme'

export const AppUser = () => {
        
        const  {   isDay, setIsDay,    theme, setTheme} = useContext(ThemeContext)
        console.log(  isDay,    theme   );
        return (

                <div style  =  {  {...theme, height:"100vh"   }   }>
                        <Login/>
                        <ButtonTheme/>
                        
                </div>

               
        )
}
