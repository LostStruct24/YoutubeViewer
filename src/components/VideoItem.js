import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="" />
            
            <div className="content">
                <div className="header" style={{ fontSize: '15px' }}>{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;