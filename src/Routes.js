import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Offer from './components/Offer';
import SignIn from './components/user/SignIn'
import SignUp from './components/user/SignUp';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/offer" component={Offer} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/signin" component={SignIn} />
            </Switch>
        </Router>
    )
}

export default Routes
