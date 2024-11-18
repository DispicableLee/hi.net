import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { startApplication } from "../../store/session";
import "./IconButton.css"

export default function IconButton({name, application, index, icon}){
    const dispatch = useDispatch()

    return (
        <div id="iconbutton-main"
            onDoubleClick={()=>dispatch(startApplication(application, index))}
        >
            <h3>{name}</h3>
            {/* <img src={icon}/> */}
        </div>
    )
}