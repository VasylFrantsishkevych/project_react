import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useParams} from "react-router";

import './MoviesPagesStyle.css';
import {getAllMovies} from "../../store";
import {Genres, Movie, Paginator} from "../../components";
import {useAddDispatch, useAddSelector} from "../../hooks";


const MoviesPage: FC = () => {
    const {movies, status, error} = useAddSelector(state => state['movieReducer']);
    const dispatch = useAddDispatch();
    const {id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const statusLoading = status === 'pending';

    useEffect(() => {
        if (!searchParams.get('page')){
            setSearchParams({page: '1'})
        }
        const page = searchParams.get('page');

        dispatch(getAllMovies({id, page}))
    }, [searchParams])

    return (
        <div>
            <Genres/>
            <div className={'movies__container'}>
                {statusLoading && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <Paginator/>
        </div>
    );
};

export {MoviesPage};