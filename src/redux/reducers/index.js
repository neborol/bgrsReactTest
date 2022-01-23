import { combineReducers } from 'redux'; // The combineReducer puts together all the individual reducers
import characters from './characters';
import movieList from './movieItem';
import movieYear from './movieYear';
import dataLoading from './dataLoading';
import appPhases from './movieItems';

export default combineReducers({
    characters, // This represents just a specific section of the store representing the characters state, accessible app-wide.
    movieList, // This represents just a specific section of the store representing the Movies state, accessible app-wide.
    movieYear, // This represents just a specific section of the store representing the Movie Year state, accessible app-wide.
    dataLoading, // This represents just a specific section of the store representing the loading spinner state, accessible app-wide.
    appPhases // This represents just a specific section of the store representing the app phase, accessible app-wide.
});