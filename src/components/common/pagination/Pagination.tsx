import React, {useState} from 'react';
import s from './Pagination.module.css'

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    changePageFunction: (pageNumber: number) => void
    portionSize: number
}

export const Pagination = (props: PropsType) => {

    const {totalItemsCount, pageSize, currentPage, changePageFunction, portionSize} = props;

    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChange = (page: number) => {
        changePageFunction(page);
    };

    const [portionCount, setPortionCount] = useState(1);

    const onNextPortionPageBtnClick = () => {
        setPortionCount(portionCount + 1);
    };
    const onPrevPortionPageBtnClick = () => {
        setPortionCount(portionCount - 1);
    };

    const firstElNumInPortion = (portionCount - 1) * pageSize + 1;
    const lastElNumInPortion = portionCount * pageSize;

    const portionsTotal = Math.ceil(pagesCount / portionSize);

    const pagesMap = pages
                        .filter(item => item >= firstElNumInPortion && item <= lastElNumInPortion)
                        .map(page => {
                            return <button className={page === currentPage ? s.currentPage : ""} onClick={() => onPageChange(page)}>{page}</button>
                        });

    return(
        <div className={s.paginationWrap}>
            {portionCount > 1 && <button className={s.paginationArrowBtn} onClick={onPrevPortionPageBtnClick}>P</button>}
            {pagesMap}
            {portionCount < portionsTotal && <button className={s.paginationArrowBtn} onClick={onNextPortionPageBtnClick}>N</button>}
        </div>
    );
};