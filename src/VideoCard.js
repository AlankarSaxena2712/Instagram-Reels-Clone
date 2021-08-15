import React, { useRef, useState } from 'react'
import "./VideoCard.css";
import VideoFooter from './VideoFooter';
import VideoHeader from './VideoHeader';


function VideoCard({url, likes, shares, channel, avatarSrc, song}) {

    const [isVideoPlaying, setVideoPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (isVideoPlaying) {
            // stop
            videoRef.current.pause();
            setVideoPlaying(false);
        } else {
            // play
            videoRef.current.play();
            setVideoPlaying(true);
        }
    }

    return (
        <div className="videoCard"> 
            <VideoHeader />
            <video 
                ref={videoRef} 
                onClick={onVideoPress} 
                className="video__player" 
                src={url} 
                alt="ig-reel-video" 
                loop
            />
            <VideoFooter 
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    )
}

export default VideoCard
