import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../services";
import {IGenres} from "../../interfaces";

interface IGenreState {
    genres: IGenres[],
    status: string | null,
    error: string | null
}

const initialState:IGenreState = {
    genres: [],
    status: null,
    error: null,
}

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll()
            return data
        }catch (e: any){
            return rejectWithValue(e.message)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{
    },
    extraReducers: {
        [getAllGenres.pending.type]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllGenres.fulfilled.type]:(state, action) => {
            state.status = 'fulfilled'
            state.genres = action.payload.genres
        },
        [getAllGenres.rejected.type]:(state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const genresReducer = genresSlice.reducer;

export default genresReducer;

