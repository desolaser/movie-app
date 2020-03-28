import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../actions'
import Login from './login'

function App() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  const handleLogin = (name, password) => {    
    if (name === "user" && password === "1234") {
      if (auth) {
        dispatch(login())
      } else {
        console.log("You are already logged in")
      }
    } else {
      console.log('Incorrect password')
    }
  }

  return (
    <div className="app container">
      <Login handleLogin={handleLogin}/>
    </div>
  );
}

export default App;
