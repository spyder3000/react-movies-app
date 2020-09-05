import React from 'react';   // using ES6 syntax for React;  
import { connect } from 'react-redux'; 
import MovieForm from './MovieForm'; 
import { startEditMovie, startRemoveMovie } from '../actions/movies'; 

export class EditMoviePage extends React.Component {
    onSubmit= (movie) => {
        // console.log(movie); 
        // this.props.dispatch(startEditMovie(this.props.movie.id, movie));  // params - id & object w/ description, note, amount, createdAt
        this.props.startEditMovie(this.props.movie.id, movie);  // replaces above line by removing dispatch which is in mapDispatchToProps below
        this.props.history.push('/');   // switch to Dashboard page;  from Chrome, click 'Components' then 'AddMoviePage' to see history object
    }
    onRemove = () => {
        // this.props.dispatch(startRemoveMovie({id: this.props.movie.id}));
        this.props.startRemoveMovie({ id: this.props.movie.id });   
        this.props.history.push('/'); 
    }
    render() {
        return (
            <div>
                <div className="page-header">  
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Movie</h1>
                    </div>
                </div>
                <div className="content-container">
                    <MovieForm 
                        movie={this.props.movie}  // movie prop to hold existing movie object;  from mapStateToProps() below
                        onSubmit={this.onSubmit}    
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Movie</button>
                </div>
            </div>
        );
    }
}; 


const mapStateToProps = (state, props) => {
    return {
        movie: state.movies.find((movie) => {
            return movie.id === props.match.params.id;   // props.match.params.id comes from MovieListItem.js <Link>
        })
    }
}

// goal is to return an object;  to more easily test, we want to replace props.dispatch(editMovie(movie)) above w/ props.onSubmit(movie);  
//  2nd param is Own props -- it's there if needed, but not needed here 
const mapDispatchToProps = (dispatch, props) => ({     // implicitly returns object;  same as => { return { onsubmit: ... } }
    startEditMovie: (id, movie) => dispatch(startEditMovie(id, movie)), 
    startRemoveMovie: (data) => dispatch(startRemoveMovie(data))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(EditMoviePage); // mapStateToProps to get us current data from state
