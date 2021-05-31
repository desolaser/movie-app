import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'

const Login = lazy(() => import('./pages/login'))
const MovieScreen = lazy(() => import('./pages/movieScreen'))
const MovieDetails = lazy(() => import('./pages/movieDetails'))

function App() {
  return (
    <div className="container">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Login} />
            <ProtectedRoute path="/movies" exact component={MovieScreen} />
            <ProtectedRoute path="/movies/:id" component={MovieDetails} />
          </Switch>         
        </Suspense>     
      </Router>
    </div>
  );
}

export default App;
