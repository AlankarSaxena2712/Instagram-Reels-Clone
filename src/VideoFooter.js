import React, { useState } from 'react'
import "./VideoFooter.css";
import {Button, Avatar} from "@material-ui/core"
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import Ticker from 'react-ticker';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function VideoFooter({song, avatarSrc, likes, shares, channel, isLiked, setIsLiked}) {
    const [isFollow, setIsFollow] = useState("Follow");
    
    const setFollowing = (event) => {
        let val = event.innerText;
        setIsFollow(val === "Follow"?event.innerHTML = `<span style="color: #41d3ff;text-shadow: 5px 5px 9px black;">Following</span>`:event.innerHTML = `<span style="color: white;text-shadow: 5px 5px 9px black;">Follow</span>`);
    }
    const setLike = () => {
        setIsLiked(!isLiked);
    }
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <Avatar src={avatarSrc} />
                <h3>
                    {channel} • <Button style={{textShadow: "5px 5px 9px black"}} value={isFollow} onClick={(e) => setFollowing(e.target)}>{isFollow}</Button>
                </h3>
            </div>
            <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon" />
                <Ticker mode="smooth">
                    {({index}) => (
                        <>
                            <h1>{song}</h1>
                        </>
                    )}
                </Ticker>
            </div>
            <div className="videoFooter__actions">
                <div className="videoFooter__actionLeft">
                    <FavoriteIcon onClick={setLike} style={isLiked?{color:"red"}:{color:"white"}} />
                    <ModeCommentIcon />
                    <SendIcon />
                    <MoreHorizIcon  />
                </div>
                <div className="videoFooter__actionRight">
                    <div className="videoFooter__stat">
                        <FavoriteIcon fontSize="small" />
                        <p>{isLiked?likes + 1:likes}</p>
                    </div>
                    <div className="videoFooter__stat">
                        <ModeCommentIcon fontSize="small" />
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
