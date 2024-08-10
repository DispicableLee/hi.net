import react from "react"
import "./PopUp.css"

export default function PopUp(startUp, setStartUp){
    return (
        <div 
            id="popup-main"
            className={startUp ? "" : "closed"}    
        >

        </div>
    )
}