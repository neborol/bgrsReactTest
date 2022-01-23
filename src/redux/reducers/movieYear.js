import { 
    YEAR_CHANGE
 } from '../actions/types';


const initialStoreSlice = {
    year: '0000'
}


export default function movieYear (storeSlice = initialStoreSlice, action) {
    const { type, payload } = action;

    switch(type) {

        case YEAR_CHANGE:
            return {
                year: payload
            }

        
        default: return storeSlice
    }
}