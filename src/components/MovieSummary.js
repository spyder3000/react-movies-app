import React from 'react'; 
import { connect } from 'react-redux';   // connect to connect to Redux Store
import { Link } from 'react-router-dom'; 
import selectMovies from '../selectors/movies'; 

//export const MovieSummary = ({ movieCount = 0 }) => {
    export const MovieSummary = (props) => {
        
    const movieWord = props.movieCount === 1 ? 'movie' : 'movies' ; 
    console.log('aaa = ' + props.jvsample); 
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.movieCount} </span>{movieWord} </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Movie</Link>
                </div>
            </div>
        </div>
    )
}; 

// this is basically a function that returns a sorted & filtered array  
const mapStateToProps = (state, ownProps) => {   // e.g. state.movies, state.filters
    console.log('zzz = ' + JSON.stringify(ownProps)); 
    let visibleMovies; 
    if (ownProps.jvsample) visibleMovies = selectMovies(state.samples, state.filters);  
    else visibleMovies = selectMovies(state.movies, state.filters);  

    return { 
        movieCount: visibleMovies.length
    };
}; 

// when you connect a component to the Redux store it's reactive, meaning changes will cause the page to re-render 
export default connect(mapStateToProps)(MovieSummary);    