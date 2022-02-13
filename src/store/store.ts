import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieReducer from "./slices/movie.slice";
import genresReducer from "./slices/genres.slice";

const rootReducer = combineReducers({
    movieReducer,
    genresReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]