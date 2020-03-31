import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../actions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './login'
import MovieScreen from './movieScreen'
import MovieDetails from './movieDetails'
import ProtectedRoute from '../../protectedRoute'

function App() {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <ProtectedRoute
            path="/movies"
            exact
            render={
              () => <MovieScreen handleLogout={handleLogout} />
            }
          />
          <ProtectedRoute path="/movies/:id" component={MovieDetails} />
        </Switch>        
      </Router>
    </div>
  );
}

export default App;
