import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../IconButton/IconButton";
import Window from "../Window/Window";
import "./Desktop.css"

export default function Desktop({windows}){
    const dispatch = useDispatch()
    // const windows = useSelector(store=>store?.session?.windows)
    useEffect(()=>{

    }, [windows])
    
    
    

    let renderedOpenWindows;
    
    if(windows.length>0){
        renderedOpenWindows = windows.map((w, index) => (
            <Window
                key={index} // Ensure each component has a unique key
                application={w.application}
                index={index}
            />
        ));
    }




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