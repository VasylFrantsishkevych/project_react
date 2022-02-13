import {axiosService} from "./axios.service";

import {urls} from "../configs";
import {IMovieDetails, IResults} from "../interfaces";

export const movieService = {
    getAll: (id:string | undefined, page: string | null) => axiosService.get<IResults[]>(`${urls.movies}?&language=en-US&with_genres=${id}`, {params: {page}})
        .then(value => value.data),
    getById: (id:string | undefined) => axiosService.get<IMovieDetails>(`${urls.movieId}/${id}`).then(value => value.data)
}