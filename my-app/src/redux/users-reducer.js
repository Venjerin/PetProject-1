const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [
        // { id: 1, photoUrl:'https://simpleslim.ru/wp-content/uploads/2020/07/2-11.jpg',  
        // followed: false, fullName: 'Dmitry', status: 'I\'m a boss', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 2, photoUrl:'https://i.pinimg.com/736x/44/8b/89/448b894ea5c9f7aabd1b839fc1e7819b--garfield-pictures-divorce.jpg',
        //  followed: true, fullName: 'Andrew', status: 'I\'m a boss too', location: { city: 'Saint-Petersburg', country: 'Russia' } },
        // { id: 3, photoUrl:'https://i.insider.com/6283291bafcc8800196f0c5a?width=2000&format=jpeg&auto=webp',
        // followed: false, fullName: 'Elon', status: 'I\'m a the bossest boss', location: { city: 'Silicon Valley', country: 'USA' } }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1
}; 

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE: 
            return {...state, currentPage: action.currentPage}
            case SET_TOTAL_USERS_COUNT: 
            return {...state, totalUsersCount: action.count}
        default:
            return state;
    }

};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount});

export default usersReducer;
