import React from 'react';   // using ES6 syntax for React;  

const ActiveButton = ({text, link}) => {
    if (link.length > 0) {
        return (
            <a className="list-item__button button" href={`https://${link}`} target='_blank'>{text}</a>
        )
    }
    return (
        <a className="list-item__button button button--inactive" href={`https://${link}`} target='_blank'>{text}</a>
    )
};
export default ActiveButton; 