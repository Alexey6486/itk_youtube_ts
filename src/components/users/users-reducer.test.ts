import {UsersPageType} from "../../redux/store";
import {setUsers, usersReducer} from "./users-reducer";

let startState: UsersPageType;
beforeEach(() => {
    startState = {
        users: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        disabledIdArr: [],
    }
});

test('Add post test', () => {
    const usersArr = [
        {
            id: 1,
            name: 'string',
            photos: {
                small: 'test',
                large: 'test'
            },
            status: 'string',
            followed: false,
        }
    ]
    const endState = usersReducer(startState, setUsers(usersArr));
    expect(endState.users.length).toBe(1);
});