import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { startApplication } from "../../store/session";
import "./IconButton.css"

export default function IconButton({name, application, index}){
    const dispatch = useDispatch()

    return (
        <div id="iconbutton-main"
            onDoubleClick={()=>dispatch(startApplication(application, index))}
        >
            <h2>{name}</h2>
            {/* <img src={icon}/> */}
        </div>
    )
}