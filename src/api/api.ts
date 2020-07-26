import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "22146b81-8dec-43d8-8ad7-26ad8ffa196f"}
});

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
                .get(`users?page=${currentPage}&count=${pageSize}`)
                .then(res => res.data)
    },
    followUserAxios(userId: number) {
        return instance
                .post(`follow/${userId}`)
                .then(res => res.data)
    },
    unfollowUserAxios(userId: number) {
        return instance
                .delete(`follow/${userId}`)
                .then(res => res.data)
    },
};
export const profileApi = {
    getProfile(userId: string) {
        return instance
            .get(`profile/${userId}`)
            .then(res => res)
    },
    getStatus(userId: string) {
        return instance
            .get(`profile/status/${userId}`)
            .then(res => {
                return res
            })
    },
}
export const accountApi = {
    updateStatus(status: string) {
        return instance
            .put(`profile/status`, {
                status
            })
            .then(res => {
                if (res.data.resultCode === 0) {
                    return res
                }
            })
    },
}
export const authApi = {
    authMe() {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                    withCredentials: true
                })
                .then(res => res);
    }
};
