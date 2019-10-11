import { createStore, combineReducers } from 'redux';
import { credentials } from './reducers';


export const store = createStore( 
    combineReducers({ credentials }),
    (localStorage['redux-store'])?
        JSON.parse(localStorage['redux-store']):
        {}
 );

 store.subscribe(() => {
     localStorage['redux-store'] = JSON.stringify(store.getState());
 })
