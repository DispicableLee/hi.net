import "./TaskBar.css"
import react from "react"
import { useState } from "react"
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from "react-redux"
import "./TaskBarMenuItem.css"

export default function TaskBarMenuItem({application, icon, menu, openMenuOptions, setOpenMenuOptions, bringMenuToTaskBar}){
    // const [openMenuOptions, setOpenMenuOptions] = useState(false)
    // console.log(windows)
    console.log(menu)




    return (
            <div id="taskbar-item-main"
                onClick={()=>{
                    setOpenMenuOptions(!openMenuOptions)
                }}
            >
                <div className="image-placeholder">

                </div>
                <h2>{application}</h2>
            </div>
    )
}