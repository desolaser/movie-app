import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {    
    const auth = useSelector((state) => state.auth)
    return (
        <Route {...rest} render={ 
            (props) => {
                return auth ?
                <Component {...props}/> :
                <Redirect to={
                    {
                        pathname: '/',
                        state: {
                            from: props.location
                        }
                    }
                } />
            }
        } />
    )
}

export default ProtectedRoute