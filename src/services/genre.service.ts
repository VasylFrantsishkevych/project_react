import {axiosService} from "./axios.service";

import {urls} from "../configs";
import {IGenres} from "../interfaces";

export const genreService = {
    getAll: () => axiosService.get<IGenres[]>(urls.genres)
}