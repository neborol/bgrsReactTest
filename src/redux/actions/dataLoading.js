import {
    DATA_LOADING
} from './types';


// Broadcast Data loading
export const dataLoading = (val) => async dispatch => {
    dispatch({
        type: DATA_LOADING, // Dispatch an action to let the app know that the character name has changed
        payload: val
    });
 }