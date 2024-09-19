import "./Window.css"
import { HexColorPicker } from "react-colorful";
import { useDispatch } from "react-redux"
import { closeWindow } from "../../store/session"
import { useState } from "react"
import ChangeCss from "./ChangeCSS";
import HiNet from "./HiNet";




export default function Window({application, index}){
    const dispatch = useDispatch()
    const [primaryColor, setPrimaryColor] = useState("")
    const [secondaryColor, setSecondaryColor] = useState("")
    // console.log(application, index)
    return (
        <div id="window-main">
            <div className="window-title-x">
                <div className="window-title">
                    <p>{application}</p>
                </div>
                <div className="window-x"
                    onClick={()=>dispatch(closeWindow(application, index))}
                >
                    X
                </div>
            </div>
            {application==="Change CSS" && 
                <ChangeCss application={application}/>
            }
            {application === "Hi.Net" &&
                <HiNet application={application}/>
            }
        </div>
    )
}