import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ArtGallery({application}){
    return (
        <div id="art-gallery-main">
            <p>{application}</p>
        </div>
    )
}