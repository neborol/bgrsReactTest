import {
    YEAR_CHANGE
} from './types';


export const yearChange = (year) => dispatch => {

    dispatch({
        type: YEAR_CHANGE, 
        payload: year
    });

}