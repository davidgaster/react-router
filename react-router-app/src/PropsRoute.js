import React from 'react'
import { Route } from 'react-router-dom'

export default function PropsRoute(props) {

  const {component: ParentCompoenent, callback, ...rest} = props

  return (
    <Route
      {...rest}
      render={ (props) => <ParentCompoenent callback={callback} {...props} />}
    />
  )

}