import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import App from './components/App';

// Every time the state changes, log it
store.subscribe(() => console.log(store.getState()));

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('react-container')
);
