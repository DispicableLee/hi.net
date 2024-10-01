import React from "react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useDispatch } from "react-redux";
import { changeDesktopBackground } from "../../store/session";
import { changeTaskbarBackground } from "../../store/session";



export default function ChangeCss(){
    const dispatch = useDispatch()
    const [primaryColor, setPrimaryColor] = useState("")
    const [secondaryColor, setSecondaryColor] = useState("")
    return (
        <div id="window-content-main">
            <div className="css-style-form">
                <div className="color-selection">
                    <h3>Choose Primary Color</h3>
                    <HexColorPicker color={primaryColor} onChange={setPrimaryColor}/>
                    <input 
                        type="text"
                        placeholder="Primary"
                        onChange={(e)=>setPrimaryColor(e.target.value)}
                        value={primaryColor}
                    />
                </div>
                <div className="color-selection">
                    <h3>Choose Secondary Color</h3>
                    <HexColorPicker color={secondaryColor} onChange={setSecondaryColor}/>
                    <input 
                        type="text"
                        placeholder="Secondary"
                        onChange={(e)=>setSecondaryColor(e.target.value)}
                        value={secondaryColor}
                    />
                </div>
                <button
                    onClick={()=>dispatch(changeDesktopBackground(primaryColor))}
                >
                    Change Desktop Background
                </button>
                <button
                    onClick={()=>dispatch(changeTaskbarBackground(secondaryColor))}
                >
                    Change Taskbar Background
                </button>
                <button
                    onClick={()=>{
                        dispatch(changeDesktopBackground("#008080"))
                        dispatch(changeTaskbarBackground("#e2e2e2"))
                    }}
                >
                    Reset to Default
                </button>

            </div>
        </div>
    )
}