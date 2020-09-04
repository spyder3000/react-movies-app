import React from 'react';
import { connect } from 'react-redux';
// import { DateRangePicker } from 'react-dates';
import { setTextFilter, setYearFilter, sortByTitle, sortByYear, sortByRating } from '../actions/filters';  // import all action creators

export class MovieListFilters extends React.Component {
    // state = {
    //   calendarFocused: null   
    // };
    onYearChange = (e) => {
        console.log('onYearChange'); 
        this.props.setYearFilter(e.target.value);
    };
    onTextChange = (e) => {
        console.log('onTextChange'); 
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {     // modify to Year, Rating, Title
        console.log('onSortChange'); 
        if (e.target.value === 'title') {
            console.log('sortByTitle')
            this.props.sortByTitle();
        } else if (e.target.value === 'year') {
            console.log('sortByYear')
            this.props.sortByYear();
        } else if (e.target.value === 'rating') {
            console.log('sortByRating')
            this.props.sortByRating();
        }
    };
    render() {
      return (  // returns JSX 
        <div className="content-container">
          <div className="input-group">
            <div className="input-group__item">
              <input className="text-input"
                type="text"
                placeholder="Search movies"
                value={this.props.filters.text}
                onChange={this.onTextChange}
              />
            </div>
            <div className="input-group__item">
              <select className="select"
                value={this.props.filters.year}
                onChange={this.onYearChange}
              >       
                <option value="all">All</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
              </select>     
            </div>
            <div className="input-group__item">
              <select className="select"
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
              >       
                <option value="title">Title</option>
                <option value="year">Year</option>
                <option value="rating">Rating</option>
              </select>     
            </div>
          </div>
        </div>
      );
    }
  };

  const mapStateToProps = (state) => {
    console.log('state = ' + JSON.stringify(state)); 
      return ({
        filters: state.filters
    //filters: { text: '', year: '2020', sortBy: 'year'}
  }); }
  
  const mapDispatchToProps = (dispatch) => ({    // implicitly returns object;  same as => { return {... } }
    setTextFilter: (text) => dispatch(setTextFilter(text)),   // dispatches action 'setTextFilter' w/ param of 'text' 
    setYearFilter: (year) => dispatch(setYearFilter(year)),
    sortByTitle: () => dispatch(sortByTitle()),
    sortByYear: () => dispatch(sortByYear()),
    sortByRating: () => dispatch(sortByRating()),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(MovieListFilters);  // mapStateToProps to get us current data from state