import {Link} from "react-router-dom";
import {FC} from "react";

import './GenreStyle.css';
import {IGenres} from "../../interfaces";

const Genre:FC<{ genre: IGenres }> = ({genre}) => {
    const {id, name} = genre;

    return (
        <Link to={`/discover/movie&language=en-US&with_genres=${id}`}>
            <span className={'genre'}>{name}</span>
        </Link>
    );
};

export {Genre};