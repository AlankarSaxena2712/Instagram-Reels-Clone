import React, { useState } from 'react'
import "./VideoCard.css";
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';


function VideoCard({url, likes, shares, channel, avatarSrc, song}) {

    const [isLiked, setIsLiked] = useState(false);
    const setLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <div className="videoCard"> 
            <VideoHeader />
            <video 
                className="video__player" 
                src={url} 
                alt="ig-reel-video" 
                loop
                autoPlay
                playsInline
                muted
                onDoubleClick={setLike}
            />
            <VideoFooter 
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
            />
        </div>
    )
}

export default VideoCard
