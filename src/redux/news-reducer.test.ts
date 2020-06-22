import newsReducer, {addNewsAC, NewsStateType} from "./news-reducer";


test('news reducer must add a new entry to the news state', () => {

    const statrState: Array<NewsStateType> = [
        {id: '44', url: 'url_01', follow: false}
    ];

    const action = addNewsAC('url_02');

    const endState = newsReducer(statrState, action);

    expect(endState.length).toBe(2);
    expect(endState[0].url).toBe('url_01');
    expect(endState[1].url).toBe('url_02');
});