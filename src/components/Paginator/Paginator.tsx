import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {Link} from "react-router-dom";

import './PaginatorStyle.css';
import {useAddSelector} from "../../hooks";
import {createPages} from "../createPages/createPages";

const Paginator: FC = () => {
    const {currentPage, totalPages} = useAddSelector(state => state['movieReducer']);
    const [params]: any = useSearchParams();
    const pages: Array<number> = [];

    createPages(pages, totalPages, currentPage)

    return (
        <div className={'paginator'}>
            <Link to={`?page=${+params.get('page') - 1}`}><button className={'button'}>Prev</button></Link>
            {
                pages.map((page, index) => <Link to={`?page=${page}` } key={index}><button
                    className={currentPage === page ? 'current_page' : 'page'}>{page}</button></Link> )
            }
            <Link to={`?page=${+params.get('page') + 1}`}><button className={'button'}>Next</button></Link>
        </div>
    );
};


export {Paginator};