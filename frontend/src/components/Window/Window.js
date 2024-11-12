import "./Window.css"
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux"
import { exitApplication, closeWindow } from "../../store/session"
import { useState } from "react"
import ChangeCss from "./ChangeCSS";
import HiNet from "./HiNet";
import Projects from "../Projects/ProjectsFolder";
import Draggable from "react-draggable";




export default function Window({application, index}){
    const dispatch = useDispatch()
    const [primaryColor, setPrimaryColor] = useState("")
    const [secondaryColor, setSecondaryColor] = useState("")
    // console.log(application, index)


    const projectUrls = 
        ["https://notify-58lu.onrender.com/home"]



    return (
        <Draggable>
            <div id="window-main"
                style={{
                    left: `${50 + (index*10)}px`,
                    top: `${50 + index*5}px`
                }}
            >
                <div className="window-title-x">
                    <div className="window-title">
                        <p>{application}</p>
                    </div>
                    <div className="window_"
                        onClick={()=>dispatch(closeWindow(application, index))}
                    >
                        _
                    </div>
                    <div className="window-x"
                        onClick={()=>dispatch(exitApplication(application, index))}
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
                {application === "Projects" &&
                    <Projects/>
                }
            </div>

        </Draggable>
    )
}