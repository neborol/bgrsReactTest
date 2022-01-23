import { 
    DATA_LOADING
 } from '../actions/types';


const initialStoreSlice = {
    spinnerLoading: false
}


export default function loadTheSpinner (storeSlice = initialStoreSlice, action) {
    const { type, payload } = action;

    switch(type) {

        case DATA_LOADING:
            return {
                ...storeSlice,
                spinnerLoading: payload
            }

        
        default: return storeSlice
    }
}