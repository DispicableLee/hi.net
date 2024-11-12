import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exitApplication } from "../../store/session";
import IconButton from "../IconButton/IconButton";
import Window from "../Window/Window";
import "./Desktop.css"
import "../Window/Window.css"

export default function Desktop(){
    const dispatch = useDispatch()
    const windows = useSelector(store=>store.session.windows)
    const openWindows = windows.filter((w)=> w.isOpen)
    const desktopCss = useSelector(store=>store?.session.desktopCss)
    console.log(windows)
    useEffect(()=>{

    }, [windows, openWindows])
    
    

    
    const renderedOpenWindows = openWindows.map((w, index) => (
        <Window
            application={w.application}
            index={index}
            style={{
                right: `${50 + index}px`
            }}
        />
    ));




    const iconButtons = [
        {
            id: 1,
            name: "Hi.Net",
            application: "Hi.Net"
        },
        {
            id: 2,
            name: "Projects",
            application: "Projects"
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
        <div id="desktop-main" style={desktopCss.main}>
            <div id="icon-button-box">
                {renderedButtons}
            </div>
            {windows.length>0 && renderedOpenWindows}
        </div>
    )
}