import React, { Fragment } from "react";
import "./VideoFrame.css";


export const VideoFrame = ({ video, id }) => {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?rel=0&amp;autoplay=1`

  return (
    <Fragment>
      <div className="main-video">
        <iframe width="590" height="337" src={url} frameBorder="0" allowFullScreen title={videoId}></iframe>
      </div>
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.channelTitle}</p>
    </Fragment>

  )
}