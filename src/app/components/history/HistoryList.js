import React, { Fragment } from "react";
import  HistoryListItem  from "./HistoryListItem";
import { connect } from "react-redux";
import "./HistoryList.css";
import * as actions from "../../store/actions/index";

const historyList = (props) => {
      let previousVideosList = props.previousList;

      return (
            <Fragment>
                  <h5>Watch it again</h5>
                  {previousVideosList.map((video, i) => {
                        return <HistoryListItem video={video} key={i} play={props.onPlay}/>
                  })}
            </Fragment>
      )
}
const mapStateToProps = state => {
      return {
            previousList: state.previousVideos
      }
}

const mapDispatchToProps = dispatch => {
      return {
           onPlay: (video) => dispatch(actions.playVideo(video))
      }
}

export default connect(mapStateToProps,mapDispatchToProps)(historyList)