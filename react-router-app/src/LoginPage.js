import React, {useState} from 'react'
import {Alert, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap'
import auth from './auth'

export default function LoginPage(props) {
  const {callback} = props
  const [user, setUser] = useState('')
  const [pw, setPw] = useState('')
  const [failure, setFailure] = useState(false)

  function clickLogin() {
    if (user === "username" && pw === "password") {
      auth.login( () => {
        setFailure(true)
        props.history.push('/index.html')
        callback( {'username': user, 'password': pw} )
      })
    }
    else {
      setFailure(true)
    }
  }

  const userOnChange = (evt) => setUser(evt.target.value)
  const pwOnChange = (evt) => setPw(evt.target.value)

  return (
    <div className="LoginPage">
      <h4>Login Page</h4>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Username</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Enter a username" onChange={userOnChange} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Password</InputGroupText>
        </InputGroupAddon>
        <Input type="password" placeholder="Enter a username" onChange={pwOnChange} />
      </InputGroup>
      <br />
      <div>
        {failure ? <Alert color="danger">Invalid username or password</Alert> : <></>}
      </div>
      <Button color="primary" onClick={clickLogin}>Login</Button>
    </div>
  )
}
