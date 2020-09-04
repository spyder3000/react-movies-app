import { createStore, combineReducers, applyMiddleware, compose } from 'redux';  
import thunk from 'redux-thunk'; 
import moviesReducer from '../reducers/movies'; 
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth'; 
import sampleReducer from '../reducers/samples'; 

// first option is populated if we're using the dev tools;  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
            movies: moviesReducer, 
            filters: filtersReducer, 
            auth: authReducer, 
            samples: sampleReducer 
        }), 
        composeEnhancers(applyMiddleware(thunk))
    ); 
    return store; 
};

