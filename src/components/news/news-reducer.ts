import { v1 } from "uuid";

const ADD_NEWS = 'ADD-NEWS';

type addNewsActionCreatorType = {
    type: typeof ADD_NEWS
    id: string
    url: string
    follow: boolean
};

type ActionType = addNewsActionCreatorType;

export type DispatchTypeNewsReducer = (action: ActionType) => void;

export type NewsStateType = {
    id: string
    url: string
    follow: boolean
}

const initialState = [
    {id: '55', url: 'https://css-tricks.com/where-do-you-learn-html-css-in-2019', follow: false},
    {id: '52', url: 'https://reactjsnews.com/react-js-with-cloudinary', follow: false},
    {id: '53', url: 'https://ru.reactjs.org/blog/2019/08/08/react-v16.9.0.html', follow: false},
];

export const addNewsAC = (url: string): addNewsActionCreatorType => {
  return {
      type: ADD_NEWS,
      id: v1(),
      url: url,
      follow: false
  }
};

const newsReducer = (state: Array<NewsStateType> = initialState, action: ActionType) => {
    switch(action.type) {

        case ADD_NEWS:
            const newEntry = {id: action.id, url: action.url, follow: action.follow};
            const stateCopy = [...state, newEntry];
            return stateCopy;

        default:
            return state;
    }
};

export default newsReducer;