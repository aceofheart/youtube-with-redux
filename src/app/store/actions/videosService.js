import * as actionTypes from './actionTypes';
import YTSearch from 'youtube-api-search';
import { API_KEY } from "../utility";


export const fetchVideosSuccess = (videos) => {
    return {
        type: actionTypes.FETCH_VIDEOS_SUCCESS,
        videos: videos
    };
}

export const fetchVideosFail = (error) => {
    return {
        type: actionTypes.FETCH_VIDEOS_FAIL,
        error: error
    };
};

export const fetchVideos = (term) => {
    return dispatch => {
        YTSearch(
            { key: API_KEY, term },
            videos => {
                dispatch(fetchVideosSuccess(videos));
            })

    };
};

