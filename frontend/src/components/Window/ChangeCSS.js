import React from "react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";



export default function ChangeCss(){
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
            </div>
        </div>
    )
}