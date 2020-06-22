import React, {ChangeEvent, useState} from "react";
import s from './News.module.css';
import {NewsStateType} from "../../redux/news-reducer";

type PropsType = {
    state: Array<NewsStateType>
    addNews: (url: string) => void
}

function News(props: PropsType) {

    const {state, addNews} = props;

    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            setInputValue(e.currentTarget.value);
        }
    };

    const onClickHandler = () => {
        if (inputValue.trim()) {
            addNews(inputValue);
        }
    };

    const mapState = state.map(item => {
        return (
            <div className={s.newsItem}>
                <div>Url: <a href={item.url} target="_blank">{item.url}</a></div>
                <div>Follow: {item.follow ? 'yes' : 'no'}</div>
            </div>
        );
    });

    return (
        <div className={s.newsWrap}>
            <h3>Add News:</h3>
            <div className={s.addNewsBlock}>
                <input type="text" placeholder="Type url..." value={inputValue} onChange={(e) => onChangeHandler(e)}/>
                <button type="submit" onClick={onClickHandler}>Add</button>
            </div>
            <h3>News:</h3>
            {mapState}
        </div>
    );
}

export default News;