import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import LuxComponent from './LuxComponent';

const WrappedHome = LuxComponent(Home, "home");
const WrappedAbout = LuxComponent(About, "about");

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>

                <hr />

                <Switch>
                    <Route exact path="/">
                        <WrappedHome />
                    </Route>
                    <Route path="/about">
                        <WrappedAbout />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
