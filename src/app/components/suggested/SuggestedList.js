import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import "./SuggestedList.css";
import SuggestedListItem from "./SuggestedListItem";

const suggestedList = (props) => {
    const listYT = props.videos;
    return (
        <Fragment>
            <h5>Suggested videos</h5>
            {listYT.map(video => {
                return <SuggestedListItem
                    video={video}
                    key={video.id.videoId}
                    play={props.onPlayVideo}
                    history={props.onSetHistoryList}
                    update={props.onUpdate} />
            })}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        videos: state.suggestedVideos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayVideo: (video) => dispatch(actions.playVideo(video)),
        onSetHistoryList: () => dispatch(actions.setHistoryList()),
        onUpdate: (term) => dispatch(actions.updateVideos(term))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(suggestedList);