import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../actions'
import Login from './login'
import MovieScreen from './movieScreen'

function App() {
  const auth = useSelector((state) => state.auth)
  const [popup, setPopup] = useState(
    {
      title: "",
      text: ""
    }
  )
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    const popup = {
      title: "",
      text: ""
    }
    setPopup(() => popup)
  }
  
  const handleLogin = (name, password) => {    
    if (name === "user" && password === "1234") {
      if (!auth) {
        dispatch(login())
        const popup = {
          title: "Success",
          text: "You are already logged in"
        }
        setPopup(() => popup)
      } else {
        const popup = {
          title: "Alert",
          text: "You are already logged on"
        }
        setPopup(() => popup)
      }
    } else {
      const popup = {
        title: "Alert",
        text: "Incorrect username or password"
      }
      setPopup(() => popup)
    }
  }

  return (
    <div className="app container">
      {
        auth ? 
          <MovieScreen handleLogout={handleLogout} /> : 
          <Login handleLogin={handleLogin} popup={popup}/>
      }
    </div>
  );
}

export default App;
