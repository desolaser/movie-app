import React, { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux'
import { logout } from '../../actions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from '../../protectedRoute'

const Login = lazy(() => import('./login'))
const MovieScreen = lazy(() => import('./movieScreen'))
const MovieDetails = lazy(() => import('./movieDetails'))

function App() {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="container">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>     
      </Router>
    </div>
  );
}

export default App;
