import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { dataLoading } from '../../redux/actions/dataLoading';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Spinner from '../../utilities/Spinner';
import './movieList.css';


const MovieList = () => {
    const cObj = useSelector(store => store.characters.characterObject);
    const loading = useSelector(store => store.characters.spinnerLoading);

    const [movies, setMovies] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const getMovies = () => {
            if (cObj.char_films) {
                try {
                    setMovies(cObj.char_films); // Update the available films
                    dispatch(dataLoading(false));
                } catch (error) {
                    alert('Something went wrong with getting the movies. Please try again.');
                }
            }
        }

        getMovies();

    }, [cObj]);  


    return (
        <div className="movieList-container">
            { loading && (<Spinner loading={loading}/>) }
           <h3>Movie List:</h3>
           { 
                (movies.length > 0) ? (
                    <div className="movie-list">
                            <List component="nav" aria-label="secondary mailbox folders">
                                {
                                    movies && movies.map(movie => {
                                        return (<ListItem key={movie} button><ListItemText primary={movie} /></ListItem>);
                                    })
                                }
                            </List>
                    </div>
                ) : (<div> <i>No Movies Listed yet!</i></div>)
            }
        </div>
    )
}


export default MovieList;