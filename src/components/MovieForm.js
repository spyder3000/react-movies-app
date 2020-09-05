import React from 'react'; 
import validator from 'validator'; 
// import moment from 'moment'; 

// import { SingleDatePicker } from 'react-dates';  

//const date = new Date();    // from core JS
// const now = moment();   // returns an instance of moment (e.g. current time); 
// //console.log(now);   // on Chrome console, click _proto_ to see all functions available for this
// console.log(now.format('YYYY-MM-DD')); 
// console.log(now.format('MMM Do, YYYY')); 

export default class MovieForm extends React.Component {
    /* goal is to track changes for all of these fields which will then be used upon button submit */ 
    constructor(props) {
        super(props); 
        this.state = {
            title: props.movie ? props.movie.title : '', 
            year: props.movie ? props.movie.year : '2020',  
            rating: props.movie ? props.movie.rating : '0',    
            recap_link: props.movie ? props.movie.recap_link : '',  
            reviews_link: props.movie ? props.movie.reviews_link : '',   
            error: ''            
        }
    }
    onTitleChange = (e) => {
        const title = e.target.value; 
        this.setState(() => ({ title })); 
    }
    onYearChange = (e) => {
        const year = e.target.value; 
        this.setState(() => ({ year })); 
    }
    onRatingChange = (e) => {
        const rating = e.target.value; 
        if (rating.match(/^[0-5]?$/)) { 
            this.setState(() => ({ rating })); 
        }
    }
    onRecapLinkChange = (e) => {
        const recap_link = e.target.value; 
        this.setState(() => ({ recap_link })); 
    }
    onReviewsLinkChange = (e) => {
        const reviews_link = e.target.value; 
        this.setState(() => ({ reviews_link })); 
    }
    

    onSubmit = ((e) => {
        e.preventDefault();  // to prevent full page refresh, handle w/ JS instead
        if (!this.state.title)  { // render error
            this.setState(() => ({ error: 'Please provide Movie Title'}))
        }
        else if (this.state.recap_link.trim().length > 0 && !validator.isURL(this.state.recap_link)) {
            this.setState(() => ({ 
                error: 'Invalid URL for Recap Link', 
                recap_link: ''
            }))
        }
        else if (this.state.reviews_link.trim().length > 0 && !validator.isURL(this.state.reviews_link)) {
            this.setState(() => ({ 
                error: 'Invalid URL for Reviews Link', 
                reviews_link: ''
            }))
        }
        else {
            let mod_link1 = this.state.recap_link.replace(/^https?\:\/\//i, ""); 
            let mod_link2 = this.state.reviews_link.replace(/^https?\:\/\//i, ""); 
            this.setState(() => ({ 
                error: '', 
                recap_link: mod_link1, 
                reviews_link: mod_link2
            }))
            // console.log('w = ' + mod_link1); 
            this.props.onSubmit({
                title: this.state.title, 
                year: this.state.year,     
                rating: this.state.rating,           
                recap_link: mod_link1, 
                reviews_link: mod_link2
            })
        }
    })
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text"
                    placeholder="Title"
                    className="text-input"
                    autoFocus
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <input 
                    //type="number"
                    type="text"
                    placeholder="Year"
                    className="text-input"
                    value={this.state.year} 
                    onChange={this.onYearChange}
                />
                <input 
                    //type="number"
                    type="text"
                    placeholder="Rating"
                    className="text-input"
                    value={this.state.rating} 
                    onChange={this.onRatingChange}
                />

                <input 
                    //type="number"
                    type="text"
                    placeholder="Recap Link"
                    className="text-input"
                    value={this.state.recap_link} 
                    onChange={this.onRecapLinkChange}
                />
                <input 
                    //type="number"
                    type="text"
                    placeholder="Reviews Link"
                    className="text-input"
                    value={this.state.reviews_link} 
                    onChange={this.onReviewsLinkChange}
                />

                {/* wrap button in <div> tag so it won't be direct child of .form for css purposes */} 
                <div>
                    <button className="button">Save Movie</button>
                </div>
            </form>
        )
    }
}