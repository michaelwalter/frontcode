import { createStore } from 'redux';
import reducers from './reducers';

const persistedState = localStorage.getItem('frontcodeState') ? JSON.parse(localStorage.getItem('frontcodeState')) : {};

export const store = createStore(reducers, persistedState);

store.subscribe(()=>{
    localStorage.setItem('frontcodeState', JSON.stringify(store.getState()))
});