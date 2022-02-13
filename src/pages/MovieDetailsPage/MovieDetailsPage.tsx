import React, {FC, useEffect} from 'react';
import {useParams} from "react-router";

import {useAddDispatch, useAddSelector} from "../../hooks";
import {MovieDetails} from "../../components";
import {getMoviesById} from "../../store";

const MovieDetailsPage: FC = () => {
    const {id} = useParams();
    const {movieId, status} = useAddSelector(state => state['movieReducer']);
    const dispatch = useAddDispatch();

    const statusLoading = status === 'pending';

    useEffect(() => {
        dispatch(getMoviesById(id))
    }, [])

    return (
        <div>
            {statusLoading && <h2>Loading...</h2>}
            {
                movieId.map(movie => <MovieDetails key={movie.id} movie={movie}/>)
            }
        </div>
    )
};

export {MovieDetailsPage};