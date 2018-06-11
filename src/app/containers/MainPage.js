import React, { Component } from "react";
import Search from "./search/Search";
import { VideoFrame } from "../components/videoFrame/VideoFrame";
import SuggestedList from "../components/suggested/SuggestedList";
import HistoryList from "../components/history/HistoryList";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
import Spinner from "../components/spinner/Spinner";


class Main extends Component {

    componentDidMount() {
        this.props.onFetchVideos(this.props.term)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.term !== nextProps.term) {
            this.props.onFetchVideos(this.props.term)
        }
    }


    renderVideo() {
        let video = null;
        if (!this.props.selectedVideo) {
            video = <Spinner />
        } else {
            video = <VideoFrame video={this.props.selectedVideo}
                id={this.props.selectedId} />
        }
        return video;
    }

    renderHistoryList() {
        if (this.props.previousVideos.length) {
            return <HistoryList />
        }
    }

    render() {

        return (
            <div className="container" id="frame">
                <Search />
                <div className="main">
                    <section className="main-box">
                        {this.renderVideo()}
                    </section>
                    <section className="history">
                        {this.renderHistoryList()}
                    </section>
                </div>
                <section className="suggested">
                    <SuggestedList />
                </section>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        suggestedVideos: state.suggestedVideos,
        selectedVideo: state.selectedVideo,
        term: state.term,
        previousVideos: state.previousVideos
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onFetchVideos: (term) => dispatch(actions.fetchVideos(term)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);