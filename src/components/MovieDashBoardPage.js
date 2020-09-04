import React from 'react';   // using ES6 syntax for React;  
import MovieList from './MovieList';  
import MovieListFilters from './MovieListFilters';  
import MovieSummary from './MovieSummary';  

const MovieDashBoardPage = () => (
    <div>
        <MovieSummary />
        <MovieListFilters />
        <MovieList />
    </div>
);

export default MovieDashBoardPage; 