// action generators for Filters

// SET_TEXT_FILTER action generator
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER', 
    text
})

// SET_YEAR_FILTER action generator
export const setYearFilter = (year = '') => ({
    type: 'SET_YEAR_FILTER', 
    year
})

// SORT_BY_TITLE action generator
export const sortByTitle = () => ({
    type: 'SORT_BY_TITLE'
})

// SORT_BY_YEAR action generator
export const sortByYear = () => ({
    type: 'SORT_BY_YEAR'
})

// SORT_BY_RATING action generator
export const sortByRating = () => ({
    type: 'SORT_BY_RATING'
})

