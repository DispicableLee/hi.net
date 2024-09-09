import "./TaskBar.css"
import react from "react"
import { useState } from "react"
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from "react-redux"
import TaskBarMenu from "./TaskBarMenu";

export default function TaskBar({windows}){
    const [menuOpen, setMenuOpen] = useState(false)
    const [openMenuOptions, setOpenMenuOptions] = useState(false)
    console.log(openMenuOptions)
    function bringMenuToTaskBar(menu){
        return menu
    }
    // =============== TaskBar Menu Options Master =======================
    const taskbarMenuOptions = [
        {
            application: "Settings",
            icon: "",
            menu: [
                {
                    application: "Change CSS",
                    icon: "",
                }
            ]
        },
        {
            application: "Hi.Net",
            icon: "",
            menu:[],
            options:[]
        },
        {
            application: "about",
            icon: "",
            menu: [],
            options:[]
        }
    ]





    return (
        <div id="taskbar-main">
            <div className="taskbar-master">
                {menuOpen &&
                    <div className="taskbar-menu-wrapper">
                        <TaskBarMenu
                            openMenuOptions={openMenuOptions}
                            setOpenMenuOptions={setOpenMenuOptions}
                            bringMenuToTaskBar={bringMenuToTaskBar}
                        />
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