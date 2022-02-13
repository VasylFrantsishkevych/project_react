import {ICompanies} from "./companies.interface";

export interface IMovieDetails {
    id?: number;
    budget: number;
    genres:[
        {
        id:number;
        name:string
    }
    ]
    homepage: string;
    original_title: string;
    overview: string;
    production_companies: ICompanies[];
    release_date: string;
    runtime: number;
    vote_average: number;
    vote_count: number;
    poster_path: string;
    popularity: number;
}