import usersReducer, { InitialStateType, followSuccess, unfollowSuccess } from "./users-reducer";

let state: InitialStateType; 


beforeEach(() => {
    state = {
        users: [
            {id: 0, name: "Name 1", followed: false, photos: {small: null, large:null}, status:"no status 0"},
            {id: 1, name: "Name 2", followed: false, photos: {small: null, large:null}, status:"no status 1"},
            {id: 2, name: "Name 3", followed: true, photos: {small: null, large:null}, status:"no status 2"},
            {id: 3, name: "Name 4", followed: true, photos: {small: null, large:null}, status:"no status 3"}
        ] ,
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followed: false,
    };
}) 



test ("follow success", () => {

    const newState = usersReducer(state, followSuccess(1))

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
    
})

test ("unfollow success", () => {

    const newState = usersReducer(state, unfollowSuccess(3))

    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
    
})