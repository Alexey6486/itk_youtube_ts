import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "77fea61f-08ed-40ed-bfd4-ca2bb20ae111"}
});

export const usersAPI = {
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
    }
};

// export const getUsers = (currentPage: number, pageSize: number) => {
//
//     return instance
//         .get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(res => res.data)
// };