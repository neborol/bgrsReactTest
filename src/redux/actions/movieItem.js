import {
    MOVIE_ITEM_CHANGE,
    MOVIE_ITEM_CHANGE_ERROR
} from './types';


// Broadcast Movie-item change
export const changeMovieItem = (item) => dispatch => {
    try {
        dispatch({
            type: MOVIE_ITEM_CHANGE, // Dispatch an action to let the app know that the movie item has changed
            payload: item
        });

        // If an error arrises, this corresponding error event gets dispatched.
        dispatch({
            type: MOVIE_ITEM_CHANGE_ERROR
        });        
    } catch (error) {
        console.error('An error occured while trying to get the movie item change.');
    }

}




 