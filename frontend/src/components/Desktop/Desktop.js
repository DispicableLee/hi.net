import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../IconButton/IconButton";
import Window from "../Window/Window";
import "./Desktop.css"

export default function Desktop(){
    const dispatch = useDispatch()
    const windows = useSelector(store=>store?.session?.windows)
    const openWindows = windows?.filter((window)=>window?.isOpen)
    console.log("all windows", windows)
    console.log("openWindows", openWindows)
    
    
    
    useEffect(()=>{

    },[windows, openWindows])
    

    
    
    
    const renderedOpenWindows = openWindows.map((w, index) => (
        <Window
            key={index} // Ensure each component has a unique key
            application={w.application}
            isOpen={w.isOpen}
        />
    ));




    const iconButtons = [
        {
            id: 1,
            name: "Hi.Net",
            application: "hi-net"
        }
    ]

    const renderedButtons = iconButtons?.map((icon)=>(
            <IconButton
                name={icon.name}
                application={icon.application}
            />
    ))


    return (
        <div id="desktop-main">
            <div id="icon-button-box">
                {renderedButtons}
            </div>
            {renderedOpenWindows}
        </div>
    )
}