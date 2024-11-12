import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import notify from '../styles/icons/notify.png' 
import pacer from '../styles/icons/pacerlogo.v3.jpg'
import './ProjectsFolder.css'

export default function Projects(){
    const dispatch = useDispatch()

    const projectObjects = [
        {
            name: "Notify",
            url: "https://notify-58lu.onrender.com/home",
            icon: notify
        },
        {
            name: "Pacer",
            url: "https://pacer-65mk.onrender.com",
            icon: pacer
        }
    ]

    let projectsMap = projectObjects.map((project)=>{
        return (
            <div className="project-tile"
                onClick={()=>window.open(`${project.url}`,"_blank")}
            >
                <img src={project.icon}/>
                <p>{project.name}</p>
            </div>
        )
    })

    return (
        <div className="projects-folder-main">
            <div className="project-map-tiles">
                {projectsMap}
            </div>
        </div>
    )
}