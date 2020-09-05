import React from 'react';   // using ES6 syntax for React;  
import MovieForm from './MovieForm'; 
import { connect } from 'react-redux'; 
import { startAddMovie } from '../actions/movies'; 

// ch 124 - convert to class-based component 
export class AddMoviePage extends React.Component {
    onSubmit= (movie) => {
        // console.log(movie); 
    //    // props.dispatch(addMovie(movie));  // action creator that expects object w/ title, year, rating, recap_link, review_link
        this.props.startAddMovie(movie);  // replaces above line w/ this & mapDispatchToProps below
        this.props.history.push('/');   // switch to Dashboard page;  from Chrome, click 'Components' then 'AddMoviePage' to see history object
    }
    render() {
        return (
            <div>
            <div className="page-header">  
                <div className="content-container">
                 <h1 className="page-header__title">Add Movie</h1>
                </div>
            </div>
            <div className="content-container">
                <MovieForm onSubmit={this.onSubmit}  /> 
            </div>
        </div>
        )
    }
}

// goal is to return an object;  to more easily test, we want to replace props.dispatch(addMovie(movie)) above w/ props.onSubmit(movie)
const mapDispatchToProps = (dispatch) => ({     // implicitly returns object;  same as => { return { onsubmit: ... } }
   startAddMovie: (movie) => dispatch(startAddMovie(movie))
}); 

export default connect(undefined, mapDispatchToProps)(AddMoviePage);   // () because we don't need anything from state;  this will give us access to props.dispatch above
