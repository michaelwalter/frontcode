import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import reducers from './reducers';

const persistedState = localStorage.getItem('frontcodeState') ? JSON.parse(localStorage.getItem('frontcodeState')) : {};

export const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(()=>{
    localStorage.setItem('frontcodeState', JSON.stringify(store.getState()))
});