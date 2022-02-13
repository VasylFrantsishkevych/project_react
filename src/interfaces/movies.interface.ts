import {IResults} from "./result.interface";

export interface IMovies {
    page: number;
    id: number;
    results: IResults[];
    total_pages: number;
}

