import "./TaskBar.css";
import React, { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from "react-redux";
import { startApplication, openWindow } from "../../store/session";

export default function TaskBar({ windows }) {
  const dispatch = useDispatch()
  const desktopCss = useSelector(store=>store.session.desktopCss)
  const closedWindows = useSelector(store=>store.session.windows).filter((w)=>!(w.isOpen))
  console.log(closedWindows)
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredTask, setHoveredTask] = useState(null);  // State to track the hovered task item
  const [isSubMenuHovered, setIsSubMenuHovered] = useState(false);  // State to track if the submenu is hovered

  // =============== TaskBar Menu Options Master =======================
  const taskbarMenuOptions = [
    {
      application: "Settings",
      icon: "",
      menu: [
        {
          application: "Change CSS",
        },
      ],
    },
    {
      application: "Hi.Net",
      icon: "",
      menu: [{
        application: "Open"
      }],
    },
    {
      application: "About",
      icon: "",
      menu: [],
    },
  ];

  // ======================= closed-Window taskbar-bar-items =====================
  const closedWindowTabs = closedWindows.map((w, index)=>{
    return (
      <div className="taskbar-bar-item"
        onDoubleClick={()=>dispatch(openWindow(w.application, index))}
      >
          <p>{w.application}</p>
      </div>
    )
  })





  // =============================================================================
  const taskBarItems = taskbarMenuOptions.map((task, index) => {
    return (
      <div
        key={index}
        id="taskbar-item-main"
        onMouseEnter={() => setHoveredTask(task.application)}
      >
        <div className="image-placeholder">
          {task.icon}
        </div>
        <h2>{task.application}</h2>
        {hoveredTask === task.application && task.menu.length > 0 && (
          <div
            className="secondary-menu"
            onMouseEnter={() => setIsSubMenuHovered(true)}  
            onMouseLeave={() => {
              setIsSubMenuHovered(false);
              setHoveredTask(null)
            }}
          >
            {task.menu.map((submenuItem, subIndex) => (
              <div 
                key={subIndex} 
                className="secondary-menu-item"
                onDoubleClick={()=>dispatch(startApplication(submenuItem.application))}
              >
                <h4>{submenuItem.application}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  });
// =========================================================================
  return (
    <div id="taskbar-main" style={desktopCss.taskbar}>
      <div 
        className="taskbar-master"
      >
        {menuOpen && (
          <div className="taskbar-menu-wrapper">
            <div className="taskbar-menu">
              {taskBarItems}
            </div>
          </div>
        )}

        <button 
          className="welcome-button" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <h1>hi</h1>
        </button>
        {/* ================================================== */}
        <div className="taskbar-window-icon-box">
          {closedWindowTabs}
        </div>
      </div>
    </div>
  );
}
