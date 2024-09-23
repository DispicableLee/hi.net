import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./HiNet.css"
export default function HiNet({application}){
    const [openTab, setOpenTab] = useState()
    const hiNetOptions = useSelector(store=>store?.session?.hiNet)
    let currentOpenTab = hiNetOptions.find((o)=>o?.idx===openTab)
    // console.log(currentOpenTab)
    let renderedOpenTab;
    // console.log(hiNetOptions.filter((o)=>o.idx===openTab))

    const renderedOptions = hiNetOptions?.map((tab, index)=>{
        return (
            <div 
                className="hi-net-option"
                onClick={()=>setOpenTab(index)}
            >
                <h3>{tab.tab}</h3>
            </div>
        )
    })

    if(currentOpenTab?.idx===0){
        // About
        renderedOpenTab = 
            <div className="about-tab">
                <h1>{currentOpenTab.tab}</h1>
            </div>
        
    }else if(currentOpenTab?.idx===1){
        // Links
        console.log(currentOpenTab.content)
        let renderedLinks = currentOpenTab?.content?.map((c)=>{
            <a href={c.url}
                className="link-a"
            >
                <h3>{c.name}</h3>
            </a>
        })
        renderedOpenTab = 
            <div className="links-tab">
                <h1>{currentOpenTab.tab}</h1>
                {renderedLinks}
            </div>
    }







    return (
        <div id="hi-net-main">
            <div className="searchbar">

            </div>
            <div className="front-end-box">
                <div className="hi-header">
                    <h3>Welcome to Hi.Net!</h3>
                </div>            
                <div className="hi-content">
                    <section className="tabs">
                        {renderedOptions}
                    </section>
                    {renderedOpenTab}
                </div>                        
            </div>
        </div>
    )
}