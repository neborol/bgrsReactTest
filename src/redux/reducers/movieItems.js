import {
    MOVIE_ITEM_CHANGE,
    MOVIE_ITEM_CHANGE_ERROR

} from '../actions/types';


const initialStoreSlice = {
    movieItem: {}
}

// A reducer normally serves the purpose of handling a data section of the store, and starts with the initial state,
//     so that if nothing changes, the initial state would be returned by the reducer, and any change would be registered
//         by the centralized store.
export default function movieItemChanged (storeSlice = initialStoreSlice, action) {
    const { type, payload } = action;

    switch(type) {

        case MOVIE_ITEM_CHANGE:
            return {
                ...storeSlice,
                movieItem: payload
            }

        case MOVIE_ITEM_CHANGE_ERROR:
            return {
                ...storeSlice,
                movieItem: {}
            }

        
        default: return storeSlice
    }
}
