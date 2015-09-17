import React from 'react';
import Loader from './components/Loader';
import { requestMake } from './actions';
import store from './store';


// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// Dispatch some actions
console.log("Making request one..");
store.dispatch(requestMake('Request one'));
console.log("Making request two..");
store.dispatch(requestMake('Request two'));
console.log("Making request three..");
store.dispatch(requestMake('Request three'));

// Stop listening to state updates
// unsubscribe();

React.render(<Loader />, document.getElementById('react-container'));

console.log("LEL JS");
