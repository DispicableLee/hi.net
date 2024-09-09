import "./TaskBarMenu.css"
import react from "react"
import { useState } from "react"
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from "react-redux"
import TaskBarMenuItem from "./TaskBarMenuItem";

export default function TaskBarMenu({application, icon, menu, openMenuOptions, setOpenMenuOptions, bringMenuToTaskBar}){
    const [menuOpen, setMenuOpen] = useState(true)
    // console.log(windows)
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
            application: "About",
            icon: "",
            menu: [],
            options:[]
        }
    ]

    const taskbarMenuItems = taskbarMenuOptions.map((w)=>{
        return (
            <TaskBarMenuItem
                application={w.application}
                icon={w.icon}
                menu={w.menu}
                openMenuOptions={openMenuOptions}
                setOpenMenuOptions={setOpenMenuOptions}
                bringMenuToTaskBar={bringMenuToTaskBar}
            />
        )
    })




    return (
        <div className="taskbar-menu">
            {taskbarMenuItems}
        </div>
    )
}