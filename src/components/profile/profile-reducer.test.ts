import {ProfilePageType} from "../../redux/store";
import {profileReducer, addPostsAC, removePostAC} from "./profile-reducer";

let startState: ProfilePageType;
beforeEach(() => {
    startState = {
        posts: [
            {message: 'Greetings!', likes: '8', postId: '1'},
            {message: 'See you later!', likes: '17', postId: '2'},
        ],
        status: 'test',
    }
});

test('Add post test', () => {
    const endState = profileReducer(startState, addPostsAC('test'));
    expect(endState.posts.length).toBe(3);
});
test('Remove post test', () => {
    const endState = profileReducer(startState, removePostAC('2'));
    expect(endState.posts.length).toBe(1);
});