import React from "react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";



export default function ChangeCss(){
    const [primaryColor, setPrimaryColor] = useState("")
    const [secondaryColor, setSecondaryColor] = useState("")
    return (
        <div id="window-content-main">
            <div className="css-style-form">
                <HexColorPicker color={primaryColor} onChange={setPrimaryColor}/>
                <input 
                    type="text"
                    placeholder="Primary"
                    onChange={(e)=>setPrimaryColor(e.target.value)}
                />
            </div>
        </div>
    )
}