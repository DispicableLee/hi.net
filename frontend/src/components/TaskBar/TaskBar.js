import "./TaskBar.css";
import React, { useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from "react-redux";
import { openWindow } from "../../store/session";

export default function TaskBar({ windows }) {
  const dispatch = useDispatch()
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

//   function handleMouseLeave() {
//     if (!isSubMenuHovered) {
//       setHoveredTask(null); // Only close the menu if the submenu is not being hovered
//     }
//   }

  const taskBarItems = taskbarMenuOptions.map((task, index) => {
    return (
      <div
        key={index}
        id="taskbar-item-main"
        onMouseEnter={() => setHoveredTask(task.application)}  // Set hovered task
        // onMouseLeave={handleMouseLeave}  // Handle mouse leave
      >
        <div className="image-placeholder">
          {task.icon}
        </div>
        <h2>{task.application}</h2>

        {/* Secondary menu displayed when hovered */}
        {hoveredTask === task.application && task.menu.length > 0 && (
          <div
            className="secondary-menu"
            onMouseEnter={() => setIsSubMenuHovered(true)}  // Keep the menu open if the submenu is hovered
            onMouseLeave={() => {
              setIsSubMenuHovered(false);
              setHoveredTask(null);  // Close the menu when leaving the submenu
            }}
          >
            {task.menu.map((submenuItem, subIndex) => (
              <div 
                key={subIndex} 
                className="secondary-menu-item"
                onDoubleClick={()=>dispatch(openWindow(submenuItem.application))}
                >
                <h4>{submenuItem.application}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  });

  return (
    <div id="taskbar-main">
      <div className="taskbar-master">
        {menuOpen && (
          <div className="taskbar-menu-wrapper">
            <div className="taskbar-menu">{taskBarItems}</div>
          </div>
        )}
        <button className="welcome-button" 
            onClick={() => setMenuOpen(!menuOpen)}
            
        >
          <h1>hi</h1>
        </button>
      </div>
    </div>
  );
}
