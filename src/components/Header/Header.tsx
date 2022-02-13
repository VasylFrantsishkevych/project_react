import {Link} from "react-router-dom";
import {FC} from "react";

import './HeaderStyle.css';

const Header:FC = () => {
    return (
        <div className={'header'}>
            <Link to={"/discover/movie"}>Movies</Link>
        </div>
    );
};

export {Header};