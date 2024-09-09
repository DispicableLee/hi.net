import "./Window.css"
import { useDispatch } from "react-redux"
import { closeWindow } from "../../store/session"




export default function Window({application, index}){
    const dispatch = useDispatch()
    console.log(application, index)
    return (
        <div id="window-main">
            <div className="window-title-x">
                <div className="window-title">

                </div>
                <div className="window-x"
                    onClick={()=>dispatch(closeWindow(application, index))}
                >
                    X
                </div>
            </div>
        </div>
    )
}