import React from "react";
import "./HistoryListItem.css";

const historyListItem = ({ video,play }) => {

    return (
        <a href="#frame" className="history-list-item" key={video.id.videoId} onClick={() =>{play(video)}}>
            <img title={video.id.videoId} src={video.snippet.thumbnails.high.url} alt="video-img"></img>
            <h6 title={video.id.videoId}>{video.snippet.title}</h6>
            <p title={video.id.videoId} className="channel">{video.snippet.channelTitle}</p>
        </a>
    )
}
export default historyListItem;