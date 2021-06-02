import React, {useState, useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';




export const Card = () => {
        const {users_, setUsers} = useContext(UserContext);
        const {theme, themeConfigFixed, isDay} = useContext (  ThemeContext  )
        return (
                <div className = "CardsContainers">
                        {
                                users_.map( (element, index) =>
                                        isDay ?
                                        <div   className = "nightCard" >
                                                <IconButton className = "delete">
                                                      <HighlightOffIcon/>  
                                                </IconButton>
                                                <img className = "img" src={ element.avatar} alt="" />
                                                <hr />
                                                <h2> {element.name} </h2>
                                                <hr />
                                                <h6> {element.biography}  </h6>

                                                
                                        </div>:
                                        <div   className = "dayCard"     >
                                                <IconButton className = "delete">
                                                      <HighlightOffIcon/>  
                                                </IconButton>
                                                <img className = "img" src={ element.avatar} alt="" />
                                                <hr />
                                                <h2> {element.name} </h2>
                                                <hr />
                                                <h6> {element.biography}  </h6>
                                        </div>
                                )
                        }
                </div>
        )
}
