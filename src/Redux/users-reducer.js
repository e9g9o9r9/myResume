import {usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLING_IN_PROGRESS = 'TOGGLING_IN_PROGRESS'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }


        case SET_USERS: {
            return {
                ...state, users: action.users
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        default:
            return state;
    }
}


export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const togglingFollowingProgress = (isFetching, userID) => ({type: TOGGLING_IN_PROGRESS, isFetching, userID})


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
}
export const follow = (userID) => {
    return (dispatch) => {
        dispatch(togglingFollowingProgress(true, userID));

        usersAPI.follow(userID).then(response => {

            if (response.data.resultCode === 0) {
               dispatch(followSuccess(userID))
            }
           dispatch(togglingFollowingProgress(false, userID));


        });
    }
}
export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(togglingFollowingProgress(true, userID));

        usersAPI.unfollow(userID).then(response => {

            if (response.data.resultCode === 0) {
               dispatch(unfollowSuccess(userID))
            }
           dispatch(togglingFollowingProgress(false, userID));


        });
    }
}

export default usersReducer;
