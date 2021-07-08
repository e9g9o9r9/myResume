import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {

    postsData: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "it,s my first post", likesCount: 11}
    ],
    profile: null,
    status: '',





};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

                return {
                    ...state,
                    postsData: [...state.postsData, action.newPostText]
                }

            }

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}


        case SET_USER_STATUS:
            return {...state, status: action.status}


        default:
            return state;

    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const getUserProfile = (userid) => (dispatch) => {
    usersAPI.getProfile(userid)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0)
            dispatch(setUserStatus(status));
        })
}
export const getUserStatus = (userid) => (dispatch) => {
    profileAPI.getUserStatus(userid)
        .then(response => {
            dispatch(setUserStatus(response.data));
        })
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export default profileReducer;


