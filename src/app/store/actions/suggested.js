import * as actionTypes from './actionTypes';
import YTSearch from 'youtube-api-search';
import { API_KEY } from "../utility";

export const playVideo = ( video )=>{
    return {
        type: actionTypes.PLAY_VIDEO,
        video: video
    }
}

export const updateSuggestedList = (videos) =>{
    return {
        type: actionTypes.UPDATE_SUGGESTED_LIST,
        videos: videos
    }
}

export const updateVideos = (term) => {
    return dispatch => {
        YTSearch(
            { key: API_KEY, term },
            videos => {
                dispatch(updateSuggestedList(videos));
            })
    };
};