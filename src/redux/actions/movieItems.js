import {
    DATA_ARRAY_CHANGE
} from './types';


// Broadcast movies_array change
export const loadMovieItems = (dataArray) => dispatch => {
    
    dispatch({
        type: DATA_ARRAY_CHANGE,
        payload: dataArray
    });   
            
}
