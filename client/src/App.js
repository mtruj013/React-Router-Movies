import React, { useState } from 'react';
//step 3: import route
import {Route, Link, Switch} from 'react-router-dom'
import SavedList from './Movies/SavedList';
//step 5: import neccesary components
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/*Step 4: <div>Replace this Div with your 2 Routes</div> */}

      <Route exact path='/'>
        <MovieList/>
      </Route>

      <Route path='/movies/:movieID'>
        <Movie/>
      </Route>
    </div>
  );
};

export default App;
