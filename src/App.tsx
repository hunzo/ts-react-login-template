import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { LoginProtectRoute, ProtectRoute } from './Components/ProtectRoute'
import LandingPage from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import { isLogin } from './Services/Services'

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <LoginProtectRoute  path="/login" component={LoginPage} />
                <ProtectRoute  path="/page" component={LandingPage} />
                <Route path="/" render={() => isLogin() ? <Redirect to="/page"/> : <Redirect to="/login"/>} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
