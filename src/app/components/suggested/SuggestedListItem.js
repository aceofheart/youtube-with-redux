import React from "react";
import "./SuggestedListItem.css";

const suggestedListItem = ({ video, play, history, update }) => {
    const termForUpdate = video.snippet.title.split(" ").splice(0, 5).join(" ")
    return (
        <a href="#frame" className="suggested-list-item" key={video.id.videoId} onClick={() => { history(); play(video); update(termForUpdate) }}>
            <img title={video.id.videoId} src={video.snippet.thumbnails.high.url} alt="video-img"></img>
            <h6 title={video.id.videoId}>{video.snippet.title}</h6>
            <p title={video.id.videoId} className="channel">{video.snippet.channelTitle}</p>
        </a>
    )
}
export default suggestedListItem;