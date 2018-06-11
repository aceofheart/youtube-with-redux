import * as actionTypes from './actions/actionTypes';
import { updateObject } from "../store/utility";

const initialState = {
    suggestedVideos: [],
    selectedVideo: null,
    term: "Historia de un amor",
    selectedId: "",
    previousVideos: [],
};

const fetchVideosSuccess = (state, action) => {
    const firstRemoved = [...action.videos];
    firstRemoved.splice(0, 1);
   
    return updateObject(state, {
        suggestedVideos: firstRemoved,
        selectedVideo: action.videos[0],
        selectedId: action.videos[0].id.videoId,
    });
};

const fetchVideosFail = (state, action) => {
    return updateObject(state, { error: action.error });
};

const playVideo = (state, action) => {
    return updateObject(state, { selectedVideo: action.video })
}


const setHistoryList = (state, action) => {
    const previousList = Object.assign([], state.previousVideos);
    const stringPreviousList = JSON.stringify(previousList);
    const single = state.selectedVideo;

    if (stringPreviousList.indexOf(JSON.stringify(single)) === -1) {
        previousList.unshift(single)
    } else {
        const movedToFrontIndex = previousList.findIndex(item => {
            return item.id.videoId === single.id.videoId
        })
        previousList.unshift(previousList.splice(movedToFrontIndex, 1)[0])
    }

    return updateObject(state, { previousVideos: previousList })
}

const updateSuggestedList = (state, action) => {
    const updated = [...action.videos];
    updated.splice(0, 1)
    return updateObject(state, { suggestedVideos: updated })
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_VIDEOS_SUCCESS: return fetchVideosSuccess(state, action);
        case actionTypes.FETCH_VIDEOS_FAIL: return fetchVideosFail(state, action);
        case actionTypes.PLAY_VIDEO: return playVideo(state, action);
        case actionTypes.SET_HISTORY_LIST: return setHistoryList(state, action);
        case actionTypes.UPDATE_SUGGESTED_LIST: return updateSuggestedList(state, action);
        default: return state;
    }

};

export { reducer }