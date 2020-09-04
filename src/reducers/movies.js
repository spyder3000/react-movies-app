// Movies Reducer - action data here comes from addEMovie action generator;  
const moviesReducerDefaultState = []; 
const moviesReducer = (state=moviesReducerDefaultState, action) => {     // default of empty array
    //console.log('AAA', action); 
    switch (action.type) {
        case 'ADD_MOVIE': 
            // return state.concat(action.movie);  // note cannot use state.push as this changes array;  return .concat creates new array
            console.log('ADD_MOVIE from reducer')
            return [        // same as above but uses spread operator
               ...state, 
               action.movie 
            ]
        case 'REMOVE_MOVIE': 
            // return state.filter((movie) => {
            //     console.log('movie.id = ' + movie.id)
            //     return movie.id !== action.id   // return all except matched id 
            // })  
            return state.filter(({ id }) => id !== action.id )   // destructured to get just id from state & simplify
        case 'EDIT_MOVIE': 
            return state.map((movie) => {
                if (action.id ===movie.id) {
                    //console.log('jv = ' + JSON.stringify(action.updates)); 
                    return {
                        ...movie, 
                        ...action.updates   // e.g. {"amount": 500};  effect is to add this as a new property
                    }; 
                } else return movie;   // no change
            })
        case 'SET_MOVIES':  // completely sets the movies array;  we don't access state because we don't care what was in there previously
            return action.movies;   
        default: 
            return state; 
    }
}; 

export default moviesReducer;  