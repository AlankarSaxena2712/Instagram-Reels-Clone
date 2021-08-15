import React from 'react'
import "./VideoHeader.css"
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined"


function VideoHeader() {
    return (
        <div className="videoHeader">
            <h2>Reels</h2>
            <CameraAltOutlinedIcon />
        </div>
    )
}

export default VideoHeader
