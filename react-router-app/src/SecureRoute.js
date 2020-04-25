import React from 'react'
import auth from "./auth"
import { Route, Redirect } from 'react-router-dom'

export default function SecureRoute(props) {
  
  const {component: ParentComponent, loginInfo, ...rest} = props

  return (
    <Route 
      {...rest}
      render = { (props) => {
        if (auth.isAuthenticated()) {
          return <ParentComponent loginInfo={loginInfo} {...props} />
        }
        else {
          return <Redirect to={{
            pathname: '/',
            state: {
              from: props.location
            }
          }}
          />
        }
      }}
    />
  )

}