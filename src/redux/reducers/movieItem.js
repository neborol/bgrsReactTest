import { 
    DATA_ARRAY_CHANGE,
    DATA_ARRAY_CHANGE_ERROR
 } from '../actions/types';


const initialStoreSlice = {
    movieItem: {},
    moviesArray: []
}

// A reducer normally serves the purpose of handling a data section of the store, and starts with the initial state,
//     so that if nothing changes, the initial state would be returned by the reducer.
export default function movieList (storeSlice = initialStoreSlice, action) {
    const { type, payload } = action;

    switch(type) {

        case DATA_ARRAY_CHANGE:
            return {
                ...storeSlice,
                moviesArray: payload
            }


        case DATA_ARRAY_CHANGE_ERROR:
            return {
                ...storeSlice,
                moviesArray: []
            }
        
        default: return storeSlice
    }
}