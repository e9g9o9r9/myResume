import * as axios from "axios";
import {setAuthUserData} from "../Redux/auth-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '09f28853-7725-400e-a308-e35aab1ef990'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=
            ${currentPage}&count=${pageSize}`,
        ).then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userid) {
        console.warn('Obsolute')
        return profileAPI.getProfile(userid)
    }
}

export const profileAPI = {
    getProfile(userid) {

        return instance.get('profile/' + userid)
    },
    getUserStatus(userid) {

        return instance.get('profile/status/' + userid)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status });
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}






