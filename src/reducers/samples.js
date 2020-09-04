const samplesReducerDefaultState = []; 
const samplesReducer = (state=samplesReducerDefaultState, action) => {     // default of empty array
    switch (action.type) {
        case 'SET_SAMPLES':  // completely sets the samples array;   
            return action.samples;     
        default: 
            return state; 
    }
}; 

export default samplesReducer;  