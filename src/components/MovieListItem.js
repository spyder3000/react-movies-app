import React from 'react';   // all JSX is converted into React.createElement, so React here is needed, even for stateless components;
import StarRating from './StarRating'; 
import ActiveButton from './ActiveButton'; 
import LinkHelper from './LinkHelper'; 
import moment from 'moment'; 
import numeral from 'numeral'; 

const MovieListItem = ({dispatch, year, title, rating, recap_link, reviews_link, id, jvsample}) => { 
    let stars = ''; 
    for (let j = 0; j < rating; j++ ) {
        stars += '<span className="fa fa-star"></span>'; 
    }
    // console.log(stars); 
    let k = ({stars}); 

    return (   /* dispatch can be accessed via destructred var also */
    
    <div className="list-item">
        <div className="list-item__part1" >
            <LinkHelper id={id} year={year} title={title} jvsample={jvsample} />
 
        </div>
        <div className="list-item__part2">
            <StarRating rating={rating} />
            <ActiveButton link={recap_link} text={"Recap"}/>
            <ActiveButton link={reviews_link} text={"Reviews"}/>
        </div>
    </div> 
)};

export default MovieListItem;   // moved Remove button to EditExpensePage.js, so no connect() needed;  