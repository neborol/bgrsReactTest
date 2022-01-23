import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Character from './components/character-selector/Character';
import MovieList from './components/movie-list/MovieList';
import MovieYear from './components/movie-year/MovieYear';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Spinner from './utilities/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { yearChange } from './redux/actions/movieYear';
import { loadMovieItems } from './redux/actions/movieItems';
import { dataLoading } from './redux/actions/dataLoading';
import axios from 'axios';
import { formatYear } from './utilities/helpers';
import './App.css';

function App() {
  const [chars, setChars] = useState([]);
  
  // Create the function to be used to dispatch all the events in this page
  const runActionCreator = useDispatch();

  // Get the redox store state if the spinner should be running or not.
  const spinnerRunning = useSelector(store => store.dataLoading.spinnerLoading);
  
  
  useEffect(() => {
    runActionCreator(dataLoading(true));  // Dispatch spinner running setting the value to true

    try {
      // Make the http request to fetch the initial data.
      const sendHttpRequest = async () => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        
        // Send an initial http get request to the swapi API to get the initial data for the app.
        const resp = await axios.get('https://swapi.dev/api/people/', config);

        
        // Since the data should have now returned, run the concerned action-creators for them to dispatch accordingly
      
        if (resp.data.results.length > 0) {
          // Load the available movies queried at app-start as initial data.
          setChars(resp.data.results);
          runActionCreator(dataLoading(false));  // Dispatch spinner running set to false 
          runActionCreator(loadMovieItems(resp.data.results));
          runActionCreator(yearChange(formatYear( resp.data.results[resp.data.results.length - 1].created))); 
        }
      }
      sendHttpRequest(); 

    } catch (error) {
      runActionCreator(dataLoading(false));  // Dispatch spinner running set to false
      alert('Something went wrong while dispatching the initial data load');
    }

  }, []);



  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
          <Navbar />
            <div className="main-content">
            <Spinner loading={spinnerRunning}/>
              <h1>Movie Sellector Widget</h1>
              <div className="movie-widgets">
                <Character characters={chars}/>
                <MovieList />
                <MovieYear />
              </div>
            </div>
          <Footer />  
      </Container>
    </>
  );
}

export default App;
