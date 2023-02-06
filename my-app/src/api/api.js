import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "76b19f55-748c-4a59-88c2-fc500f802f3b"
    },
    withCredentials: true
})

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        { withCredentials: true })
        .then(response => {
            return response.data
        })
};


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            { withCredentials: true })
            .then(response => {
                return response.data
            })
    }
}
