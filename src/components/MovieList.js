import React from 'react'; 
import { connect } from 'react-redux';   // connect to connect to Redux Store
import MovieListItem from './MovieListItem';  
import selectMovies from '../selectors/movies'; 

export const MovieList = (props) => (     // set to export to test in ExpenseList.test.js 
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Movies</div>
            <div className="show-for-desktop">Movies</div>
            <div className="show-for-desktop">Rating (0-5) / Buttons</div>
        </div>
        <div className="list-body">
            { props.movies.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No movies</span>
                </div>
            ) : (
                props.movies.map((movie) => {
                    return <MovieListItem key={movie.id} {...movie} jvsample={props.jvsample} />   /* ...movie allows for destructuring in MovieListItem */
                    //return <span> 0 </span>
                },
                <span>Movie List coming soon </span> 
                )
            )
            }
        </div>
    </div>
); 

// replaces logic below (this one's more standard);  this is basically a function that returns a sorted & filtered array  
const mapStateToProps = (state, ownProps) => {   // e.g. state.expenses, state.filters
    // console.log('state.movies = ' + JSON.stringify(state.movies));  
    // console.log('state.filters = ' + JSON.stringify(state.filters)); 
    let visibleMovies; 
    if (ownProps.jvsample) visibleMovies = selectMovies(state.samples, state.filters);  
    else visibleMovies = selectMovies(state.movies, state.filters);  

    return {
        // movies: selectMovies(state.movies, state.filters)   // params for default fn in selectors/expenses
        movies: visibleMovies
    }; 
}; 

// when you connect a component to the Redux store it's reactive, meaning changes will cause the page to re-render 
export default connect(mapStateToProps)(MovieList);    