import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './LoginPage'
import PropsRoute from './PropsRoute'
import SecureRoute from './SecureRoute'
import Page from './Page'
import { Card, CardBody } from 'reactstrap'

export default function App() {

  const [loginInfo, setLoginInfo] = useState( {'username': '', 'password': ''} )

  function callback(info) {
    setLoginInfo(info)
    console.log(info)
  }

  const headerStyle = { backgroundColor: "#6c6768", borderColor: "6c6768" }
  const bodyStyle = { color: 'white' }
  return (
    <div className="App">
      <Card style={headerStyle}>
        <CardBody>
          <h3 className="card-title" style={bodyStyle}>React Router App</h3>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Router>
            <Switch>
              <PropsRoute path='/' exact callback={callback} component={LoginPage} />
              <SecureRoute path='/index.html' exact loginInfo={loginInfo.username} component={Page}/>
            </Switch>
          </Router>
        </CardBody>
      </Card>
    </div>
  );
}