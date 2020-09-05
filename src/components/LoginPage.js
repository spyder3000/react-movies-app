import React from 'react';   // using ES6 syntax for React;  
import { connect } from 'react-redux'; 
import { startLogin } from '../actions/auth'; 

export const LoginPage = ({ startLogin }) => (   // destructured off of props (e.g. startLogin will = props.startLogin) from below
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Movie App</h1>
            <p>Recap & Review Links for Movies</p>
            <button className="button" onClick={startLogin}>Login with Google</button>            
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({ 
    startLogin: () => dispatch(startLogin())    // sets up function to dispatch startLogin()
})

export default connect(undefined, mapDispatchToProps)(LoginPage); 