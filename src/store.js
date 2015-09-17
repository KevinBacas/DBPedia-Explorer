import { createStore } from 'redux';
import requestApp from './reducers';

let store = createStore(requestApp);

export default store;
