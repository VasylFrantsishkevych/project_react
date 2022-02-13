import React, {FC} from "react";

import './ProductionCompaniesStyle.css';
import {ICompanies} from "../../../interfaces";

const ProductionCompanies:FC <{company: ICompanies}> = ({company}) => {
    const {logo_path, name, origin_country} = company;
    return (
        <div className={'production__companies_card'}>
            <img src={`https://image.tmdb.org/t/p/w300${logo_path}`} alt={name}/>
            <h4 >{name}</h4>
            <h4>Country: {origin_country}</h4>
        </div>
    );
};

export {ProductionCompanies};