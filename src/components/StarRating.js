import React from 'react';   // using ES6 syntax for React;  

const StarRating = (props) => {
    if (props.rating == 5) {
        return ( <div className="list-item__rating"><span className="fa fa-star"></span><span className="fa fa-star"></span>
            <span className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span></div> )
    }
    if (props.rating  == 4) {
        return ( <div className="list-item__rating"><span className="fa fa-star"></span><span className="fa fa-star"></span>
            <span className="fa fa-star"></span><span className="fa fa-star"></span></div> )
    }
    if (props.rating  == 3) {
        return ( <div className="list-item__rating"><span className="fa fa-star"></span><span className="fa fa-star"></span>
            <span className="fa fa-star"></span></div> )
    }   
    if (props.rating  == 2) { return ( <div className="list-item__rating"><span className="fa fa-star"></span>
            <span className="fa fa-star"></span></div> )}
    if (props.rating  == 1) { return ( <div className="list-item__rating"><span className="fa fa-star"></span></div> )}
    return ( <div className="list-item__rating"></div> )    
};
export default StarRating; 
