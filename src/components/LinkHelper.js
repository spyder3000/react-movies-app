import React from 'react';   // using ES6 syntax for React;  
import { Link } from 'react-router-dom'; 

const LinkHelper = ({id, year, title, jvsample}) => {
    if (!jvsample) {
        return (
            <Link className="list-item__link" to={`/edit/${id}`}>
                <h3 className="list-item__title"><span className="list-item__year">{year} </span>{title}</h3>
            </Link>  
        )
    }
    return (
        <h3 className="list-item__title"><span className="list-item__year">{year} </span>{title}</h3>
    )
};
export default LinkHelper;

 