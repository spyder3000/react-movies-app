
// Get visible movies sorted in the specified order ;    
export default (movies, {text, year, sortBy  }) => {  // 1st param is array of movies
    return movies.filter((movie) => {   // will return filtered & sorted array (due to .filter() & .sort() below)
        const textMatch =  movie.title.toLowerCase().includes(text.toLowerCase());  // .includes checks for match in string 
        const yearMatch =  movie.year.toLowerCase().includes(year.toLowerCase()) || year.toLowerCase() ==='all';  // .includes checks for match in string 
        return yearMatch && textMatch;  
    }).sort((a, b) => {
        if (sortBy === 'title') {        // put titles in alphabetical order;  1 means b comes first;  -1 means a comes first 
            return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1 
        }
        if (sortBy === 'year') {      // put largest year first;  1 means b comes first;  -1 means a comes first
            return a.year < b.year ? 1 : -1 
        }
        if (sortBy === 'rating') {      // put largest rating first;  1 means b comes first;  -1 means a comes first
            return a.rating < b.rating ? 1 : -1 
        }        
    })
}; 
