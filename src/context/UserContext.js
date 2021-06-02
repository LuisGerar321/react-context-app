import React , { useState, createContext} from 'react'
import USERS from "../users";

export const UserContext =  createContext();


export const UserProvider  = ( {children}) => {
        const [users, setUsers] = useState( USERS);
        return(
                <UserContext.Provider value =  {  {users,  setUsers}   }>
                        {children}
                </UserContext.Provider>
        )
}