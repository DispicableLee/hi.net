import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeWindow } from "../../store/session";
import IconButton from "../IconButton/IconButton";
import Window from "../Window/Window";
import "./Desktop.css"
import "../Window/Window.css"

export default function Desktop(){
    const dispatch = useDispatch()
    const windows = useSelector(store=>store.session.windows)
    console.log(windows)
    useEffect(()=>{

    }, [windows])
    
    

    
    const renderedOpenWindows = windows.map((w, index) => (
        <Window
            application={w.application}
            index={index}
        />
    ));




    const iconButtons = [
        {
            id: 1,
            name: "Hi.Net",
            application: "Hi.Net"
        }
    ]

    const renderedButtons = iconButtons?.map((icon, index)=>(
            <IconButton
                key={index}
                name={icon.name}
                application={icon.application}
                index={index}
            />
    ))


    return (
        <div id="desktop-main">
            <div id="icon-button-box">
                {renderedButtons}
            </div>
            {windows.length>0 && renderedOpenWindows}
        </div>
    )
}