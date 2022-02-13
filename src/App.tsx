import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";


import {MovieDetailsPage, MoviesPage} from "./pages";
import {Layout} from "./components";

const App:FC = () => {

  return (
      <div>
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route index element={<MoviesPage/>}/>
                  <Route path={'discover/movie'} element={<MoviesPage/>}/>
                  <Route path={'movie/:id'} element={<MovieDetailsPage/>}/>
                  <Route path={'discover/movie&language=en-US&with_genres=:id'} element={<MoviesPage/>}/>
              </Route>
          </Routes>
      </div>
  );
};

export default App;
