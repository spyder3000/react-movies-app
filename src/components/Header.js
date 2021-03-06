import React from 'react';   // using ES6 syntax for React;  
import { Link } from 'react-router-dom'   // found on reacttraining.com site
import { connect } from 'react-redux'; 
import { startLogout } from '../actions/auth';  

export const Header = ({ startLogout, hideSample }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Movies</h1>
                </Link> 
                <div>
                    <Link className={`header__sample ${hideSample}`} to="/sample">
                        <p>Sample</p>
                    </Link>
                    <button className="button button--logout" onClick={startLogout}>Logout</button>
                </div>
            </div>
        </div>
    </header>
); 

const mapDispatchToProps = (dispatch) => ({     // implicitly returns object via ({...}) 
    startLogout: () => dispatch(startLogout())
}); 

// modify to connected version to connect this to Redux;  
export default connect(undefined, mapDispatchToProps)(Header); 