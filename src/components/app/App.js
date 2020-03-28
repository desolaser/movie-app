import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../actions'
import Login from './login'

function App() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  const handleChange = () => {
    if (auth) {
      dispatch(logout())
    } else {
      dispatch(login())
    }
  }

  return (
    <div className="app container">
      <Login auth={auth} handleChange={handleChange}/>
    </div>
  );
}

export default App;
