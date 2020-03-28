import React, {useState} from 'react'

function Login(props) {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleLogin(name, password)
  }

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
        </div>   
      </div>
    </div>        
  );
}

export default Login;

