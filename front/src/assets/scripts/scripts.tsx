import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { store} from "./store";
import { Provider } from "react-redux";

import {AppHeader} from "./layouts/default/app-header/app-header";
import {AppFooter} from "./layouts/default/app-footer/app-footer";
import {Home} from "./pages/home/home";
import {Stuff} from "./pages/stuff/stuff";
import {Services} from "./pages/services/services";
import {Contact} from "./pages/contact/contact";

const container = document.getElementById("app");

export class App extends React.Component {
    constructor (props, state) {
        super (props, state);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <AppHeader />
                    <main className="app-main">
                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                        <Route path="/home" component={Home} />
                        <Route path="/stuff" component={Stuff} />
                        <Route path="/services" component={Services} />
                        <Route path="/contact" component={Contact} />
                    </main>
                    <AppFooter />
                </div>
            </BrowserRouter>
        );
    }
}

if (container) {
    ReactDOM.render(
        (
            <Provider store={store}>
                <App />
            </Provider>
        ),
        container
    );
}