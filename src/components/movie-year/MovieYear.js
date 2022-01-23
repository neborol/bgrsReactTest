import React from 'react';

import { useSelector } from 'react-redux';


const MovieYear = () => {
    const yearData = useSelector(store => store.movieYear.year);
    const c_Name = useSelector(store => store.characters.characterObject);



    return (
        <div className="movieYear-container">
            <h3>Name / Year last Movie :</h3>
            
             {/* Show the year last movie only if the character name is available */}
            { c_Name.char_name !== '' ? 
                (<div>{ c_Name.char_name } - { yearData }</div>) : (<div>No Year Selected</div>) }
            <hr style={{width: '200px', marginInlineStart: 0}} />
        </div>
    )
}


export default MovieYear;