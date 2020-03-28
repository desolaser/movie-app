import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/components/app';
import * as serviceWorker from './serviceWorker';


/* 
This is to bind the store to redux chrome extension

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
