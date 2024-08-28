import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { openWindow } from "../../store/session";
import "./IconButton.css"

export default function IconButton({name, application}){
    const dispatch = useDispatch()

    return (
        <div id="iconbutton-main"
            onDoubleClick={()=>dispatch(openWindow(application, true))}
        >
            <h2>{name}</h2>
            {/* <img src={icon}/> */}
        </div>
    )
}