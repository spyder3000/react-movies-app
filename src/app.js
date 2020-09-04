import React from 'react';   // using ES6 syntax for React;  
import ReactDOM from 'react-dom'; 
import {Provider} from 'react-redux';  // Provider allows us to provide the Store to all the components in our application
import AppRouter, { history } from './routers/AppRouter'; 
import configureStore from './store/configureStore'; 
import {startSetMovies} from './actions/movies'; 
import {setSamples} from './actions/samples'; 
import { login, logout } from './actions/auth'; 
import 'normalize.css/normalize.css';   // found in node_modules folder
import './styles/styles.scss'; 
import 'react-dates/lib/css/_datepicker.css'; 
import { firebase } from './firebase/firebase'; 
import LoadingPage from './components/LoadingPage'; 

const store = configureStore();  // this gives us access to store.subscribe() & store.dispatch(); 

const jsx = (   /*  Provider requires 'store' prop;  note: comment not allowed in <Provider> -- causes error;  */
    <Provider store={store}>  
      <AppRouter />
    </Provider>
  );
  
let hasRendered = false; 
// note: only want to render the app one time - either at login or logout
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));   // note: only want to render this one time - either at login or logout
    hasRendered = true; 
  }
}

// Add a "Loading" message while we're waiting on the data from Firebase 
ReactDOM.render(<LoadingPage />, document.getElementById('app'));
store.dispatch(setSamples());  

// firebase method that runs a callback when Auth state is changed 
firebase.auth().onAuthStateChanged((user) => {
  // if user logged in, need to generate their expenses & redirect to dashboard page 
  if (user) {
    //console.log('log in - ', user.uid); 
    store.dispatch(login(user.uid)); 
    store.dispatch(startSetMovies()).then(() => {
      renderApp();   
      // only redirect if we're on login page;  e.g. won't redirect to dashboard if you refresh from Edit page 
      if (history.location.pathname === '/') {    // history.location gives current URL
        history.push('/dashboard'); 
      }
    })
  } else {
    // console.log('log out'); 
    store.dispatch(logout()); 
    renderApp(); 
    history.push('/');  // redirects back to Home page (Login page) 
  }
}); 

//ReactDOM.render(<AppRouter />, document.getElementById('app'))   // 1st param is JSX to render;  2nd is location -- e.g. 'app' on index.html;  
