import React from 'react';

import { useDispatch } from 'react-redux';
import { changeCharacter } from '../../redux/actions/characters';
import { dataLoading } from '../../redux/actions/dataLoading';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));




const Character = ({characters}) => {
    const classes = useStyles();
    const runActionCreator = useDispatch();
    const [character, setCharacter] = React.useState('');
  
    const handleChange = (event) => {
        const chterObject = {
          char_name: event.target.value.name,
          char_films: event.target.value.films,
        };
 
        if (event.target.value === '') {
          return;
        }

        setCharacter(event.target.value);

        runActionCreator(changeCharacter(chterObject)); // Dispatch the changed value
        runActionCreator(dataLoading(true)); // Dispatch the dataLoading event, so as to start the spinner
    };


    return (
        <div className="character-container">
          <h3>Characters:</h3>
          <div>
              <h5>Select dropdown</h5>
            <div>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Character</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={character}
                            onChange={handleChange}
                            label="Character"
                        >
                            <MenuItem value="">
                                <em> None </em>
                            </MenuItem>
                            
                            {characters.map(char => {
                                // const person = extractCharacter(char);
                                return (
                                <MenuItem  key={char.name} value={char}>{ char.name }</MenuItem>
                                );
                            })}
                        </Select>
                </FormControl>
            </div>

          </div>
        </div>
    )
}


export default Character;