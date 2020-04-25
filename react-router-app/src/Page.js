import React from 'react'

export default function Page(props) {

  const {loginInfo} = props

  return (
    <h1>{'Successfully logged in user: ' + {loginInfo}}</h1>
  )

}