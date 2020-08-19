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
                            return <button key={page} className={page === currentPage ? s.currentPage : ""} onClick={() => onPageChange(page)}>{page}</button>
                        });

    const portionWithLastPage = (page: number) => {
        onPageChange(page);
        setPortionCount(portionsTotal);
    };
    const portionWithFirstPage = (page: number) => {
        onPageChange(page);
        setPortionCount(1);
    };

    const lastPage = pages.map(page => {
        if (page === pages.length - 1) {
            return (
                <div key={page}>
                    <div className={s.paginationDots}>...</div>
                    <button onClick={() => portionWithLastPage(page)}
                         className={page === currentPage ? s.currentPage : ""}>{page}</button>
                </div>
            )
        }
        return null;
    });
    const firstPage = pages.map(page => {
        if (page === 1) {
            return (
                <div key={page}>
                    <button onClick={() => portionWithFirstPage(page)}
                         className={page === currentPage ? s.currentPage : ""}>{page}</button>
                    <div className={s.paginationDots}>...</div>
                </div>
            )
        }
        return null;
    });

    return(
        <div className={s.paginationWrap}>
            {portionCount > 1 && <button className={s.paginationArrowBtn} onClick={onPrevPortionPageBtnClick}>PREV</button>}
            {portionCount > 1 && firstPage}
            {pagesMap}
            {portionCount < portionsTotal && lastPage}
            {portionCount < portionsTotal && <button className={s.paginationArrowBtn} onClick={onNextPortionPageBtnClick}>NEXT</button>}
        </div>
    );
};