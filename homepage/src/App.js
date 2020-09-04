import React, {Component} from 'react';
import './App.css'
import Home from "./components/Home/Home";
import NavBar from "./components/Nav/NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <section>
                        <NavBar/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                        </Switch>
                    </section>
                </div>
            </Router>

        );
    };
}

export default App;