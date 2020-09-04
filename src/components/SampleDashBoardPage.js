import React from 'react';   // using ES6 syntax for React;  
import { Link } from 'react-router-dom'; 
import MovieList from './MovieList';  
import MovieListFilters from './MovieListFilters';  
import MovieSummary from './MovieSummary';  
import Header from './Header'; 

const SampleDashBoardPage = () => (
    <div>
        <Header hideSample={"hideme"}/>
        <div className="banner__exitSample">
            <Link className="button banner__button" to="/dashboard">Exit Sample</Link>
        </div>
        <MovieSummary jvsample={"sample"} />
        <MovieListFilters  />
        <MovieList jvsample={"sample"} />
    </div>
);

export default SampleDashBoardPage; 