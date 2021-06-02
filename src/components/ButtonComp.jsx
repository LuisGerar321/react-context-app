import React, {useContext} from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginContext } from '../context/LoginContext ';


export const ButtonComp = ({formUser, formPass}) => {
        const  {user, setUser, password, setPassword, isLoggedIn,  setIsLoggedIn }   = useContext(LoginContext);

        const callbackValidateInfo = () => {
                //find if  formUser exist and if it match with the password//
                        //change the state//
                        setUser(formUser);
                        setPassword( formPass)
                        setIsLoggedIn(true);
        };
        console.log( `user:  ${user}, pass ${password}`  ); 
        return (
                <div>
                        <Button onClick  = { callbackValidateInfo  }  >   Login   </Button>    
                </div>
        )
}
