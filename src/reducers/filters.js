const filtersReducerDefaultState = { 
    text: '', 
    year: 'All', 
    sortBy: 'title' 

}
const filtersReducer = (state=filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            // return state.concat(action.expense);  // note cannot use state.push as this changes array;  return .concat creates new array
            return {        // same as above but uses spread operator
            ...state,           // current object
            text: action.text   // add/update text property of this object
            };
        case 'SET_YEAR_FILTER': 
            // return state.concat(action.expense);  // note cannot use state.push as this changes array;  return .concat creates new array
            return {        // same as above but uses spread operator
            ...state,           // current object
            year: action.year   // add/update text property of this object
            };            
        case 'SORT_BY_TITLE': 
            return {
                ...state, 
                sortBy: 'title'
            }
        case 'SORT_BY_YEAR': 
            return {
                ...state, 
                sortBy: 'year'
            }                
        case 'SORT_BY_RATING': 
            return {
                ...state, 
                sortBy: 'rating'
            }   
        default: 
            return state; 
    }
}

export default filtersReducer;  