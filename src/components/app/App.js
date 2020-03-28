import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../actions'

function App() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  

  function handleChange() {
    if (auth) {
      dispatch(logout())
    } else {
      dispatch(login())
    }
  }

  return (
    <div className="App">
      <h2>You are currently logged {auth ? "in" : "out"}</h2>
      <button onClick={handleChange}>
        {auth ? "Logout": "Login"}
      </button>
    </div>
  );
}

export default App;
