import breedsReducer from './breeds';
import categoriesReducer from './categories';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    breeds: breedsReducer,
    categories: categoriesReducer,
})

export default allReducers