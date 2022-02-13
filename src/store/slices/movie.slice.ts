import {createAsyncThunk, createSlice, Draft} from "@reduxjs/toolkit";

import {IMovieDetails, IResults} from "../../interfaces";
import {movieService} from "../../services";

interface IMovieState {
    movies: IResults[],
    movieId: IMovieDetails[],
    status: string | null,
    error: string | null,
    currentPage: number,
    totalPages: number
}

const initialState: IMovieState = {
    movies: [],
    movieId: [],
    status: null,
    error: null,
    currentPage: 1,
    totalPages: 0,
}

export const getAllMovies = createAsyncThunk<IResults[], {id: string | undefined, page: string | null}>(
    'movieSlice/getAllMovies',
    async ({id, page}, {rejectWithValue}) => {
        try {
            return await movieService.getAll(id, page)
        }catch (e: any) {
            return rejectWithValue(e.message)
        }
    }
)

export const getMoviesById = createAsyncThunk<IMovieDetails[], string | undefined>(
    'movieSlice/getMoviesById',
    async (id, {rejectWithValue}) => {
        try {
            const data =  await movieService.getById(id);
            return [data]
        }catch (e: any){
            return rejectWithValue(e.message)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getAllMovies.pending.type]: (state: Draft<IMovieState>) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllMovies.fulfilled.type]: (state: Draft<IMovieState>, action) => {
            state.status = 'fulfilled'
            state.movies = action.payload.results
            state.currentPage = action.payload.page
            state.totalPages  = action.payload.total_pages
        },
        [getAllMovies.rejected.type]: (state: Draft<IMovieState>, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        [getMoviesById.pending.type]: (state: Draft<IMovieState>) => {
            state.status = 'pending'
            state.error = null
        },
        [getMoviesById.fulfilled.type]: (state: Draft<IMovieState>, action) => {
            state.status = 'fulfilled'
            state.movieId = action.payload
        },
        [getMoviesById.rejected.type]: (state: Draft<IMovieState>, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const movieReducer = movieSlice.reducer;

export default movieReducer;

