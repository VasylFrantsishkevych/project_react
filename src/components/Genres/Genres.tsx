import React, {FC, useEffect} from 'react';

import './GenresStyle.css';
import {getAllGenres} from "../../store";
import {Genre} from "../Genre/Genre";
import {useAddDispatch, useAddSelector} from "../../hooks";

const Genres: FC = () => {
    const {genres, status, error} = useAddSelector(state => state.genresReducer);
    const dispatch = useAddDispatch();

    const statusLoading = status === 'pending';


    useEffect(() => {
        dispatch(getAllGenres())
    }, [])

    return (
        <div>
            {statusLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            <div className={'genres'}>{
                genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }</div>
        </div>
    );
};

export {Genres};