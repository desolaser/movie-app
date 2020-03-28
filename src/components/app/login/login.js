import React from 'react'

function Login(props) {
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
                type="text" 
                placeholder="Enter your name"
                class="form-control"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password"
                placeholder="Enter your password"
                class="form-control"
              />
            </div>
            <div className="form-group text-center">
              <input 
                type="button"
                className="btn btn-primary"
                onClick={ () => console.log("Wenamen") } 
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

