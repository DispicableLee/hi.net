import "./TaskBar.css"
import react from "react"
import { useState } from "react"
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from "react-redux"

export default function TaskBar({windows}){
    const [menuOpen, setMenuOpen] = useState(true)
    // console.log(windows)
    const taskbarMenuOptions = [
        {
            application: "Settings",
            icon: "",
        }
    ]

    const taskbarMenuItems = taskbarMenuOptions.map((w)=>{
        return (
            <div id="taskbar-item-main">

            </div>
        )
    })




    return (
        <div id="taskbar-main">
            <div className="taskbar-master">
                {menuOpen &&
                    <div className="taskbar-menu">
                        {taskbarMenuItems}
                    </div>
                }
                <button className="welcome-button"
                    onClick={()=>setMenuOpen(!menuOpen)}
                >
                    <h1>hi</h1>
                </button>
            </div>
        </div>
    )
}