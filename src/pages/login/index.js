import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../redux/slice/authSlice'

const Login = () => {
  const auth = useSelector(state => state.root.auth)
  const history = useHistory()
  const dispatch = useDispatch()
  const [popup, setPopup] = useState({ title: "", text: "" })
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === "user" && password === "1234") {
      if (!auth) {
        dispatch(login({
          name,
          password
        }))
        history.push("/movies")
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

  let alertClasses = popup.title === "Alert" ? "bg-danger" : "bg-success" 
  alertClasses += " p-2 text-center text-white"

  return (
    <div className="container min-vh-100">
      <div className="row min-vh-100 justify-content-center align-items-center">
        <div className="card col-6">
          <div className="card-header text-center">
            Login
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>Name</label>
              <input 
                className="form-control"
                type="text" 
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                className="form-control"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group text-center">
              <input 
                className="btn btn-primary"
                type="button"
                onClick={handleSubmit} 
                value="Submit"
              />
            </div>
          </div>
          {popup.title &&
            <div className={alertClasses}>
              {popup.title} 
              <hr className="bg-dark"/>
              <div className="card-body">
                {popup.text} 
              </div>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Login

