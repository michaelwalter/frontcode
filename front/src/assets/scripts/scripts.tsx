import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {AppHeader} from "./components/app-header/app-header";
import {AppFooter} from "./components/app-footer/app-footer";
import {Home} from "./components/pages/home/home";
import {Stuff} from "./components/pages/stuff/stuff";
import {Services} from "./components/pages/services/services";
import {Contact} from "./components/pages/contact/contact";

const container = document.getElementById("app");

export class App extends React.Component {
    constructor (props, state) {
        super (props, state);
    }

    render() {
        return (
            <BrowserRouter >
                <div className="app-wrapper">
                    <AppHeader />
                    <main className="app-main">
                        <Route render={({ location }) => (
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    classNames="fade"
                                    timeout={300}
                                >
                                    <div>
                                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                                        <Route path="/home" component={Home} />
                                        <Route path="/stuff" component={Stuff} />
                                        <Route path="/services" component={Services} />
                                        <Route path="/contact" component={Contact} />
                                    </div>
                                </CSSTransition>
                            </TransitionGroup>
                        )} />
                    </main>
                    <AppFooter />
                </div>
            </BrowserRouter >
        );
    }
}

if (container) {
    ReactDOM.render(
        (
          <App />
        ),
        container
    );
}