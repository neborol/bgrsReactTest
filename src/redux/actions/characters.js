import {
    CHARACTER_CHANGE,
    CHARACTER_CHANGE_ERROR
} from './types';

// Broadcast Character change
export const changeCharacter = (characterObject) => async dispatch => {
    // Fragile code that can break because of side effects, hence try-catch block.
    try {
        dispatch({
            type: CHARACTER_CHANGE, // Dispatch an action to let the app know that the character name has changed
            payload: characterObject
        });
    } 
    catch (err) {
        // In the case where the character change causes an error. 
        dispatch({
             type: CHARACTER_CHANGE_ERROR
        });
    }
}



 