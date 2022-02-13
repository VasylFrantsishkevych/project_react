import React, {FC} from 'react';
import {Link} from "react-router-dom";

import './MovieStyle.css';
import {IResults} from "../../interfaces";


const Movie: FC<{movie: IResults}> = ({movie}) => {
    const {poster_path, id, original_title, release_date, vote_average} = movie;

    return (
        <div className={'movie-info__card'}>
            <div className={'movie-info__card_title'}>
                <Link to={`/movie/${id}`}><p>{original_title}</p></Link>
            </div>
            <div>
                <Link to={`/movie/${id}`}>
                    <div className={'movie-info__card_image'}>
                        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title}`}/>
                    </div>
                </Link>
                <div className={'movie-info__card_text'}>
                    <h5>Data: {release_date}</h5>
                    <div className={'rating'}>
                        {vote_average}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Movie};