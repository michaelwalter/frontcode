import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Switch, Redirect, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { store} from "./store";
import { Provider } from "react-redux";

import {AppHeader} from "./layouts/default/app-header/app-header";
import {AppFooter} from "./layouts/default/app-footer/app-footer";
import {Page} from "./layouts/default/page";
import {ResponsiveMenu} from "./components/responsive-menu/responsive-menu";

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
                    <ResponsiveMenu />
                    <main className="app-main">
                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                        <Route path="/home" render={() => <Page id={"page-0"} />} />
                        <Route path="/stuff" render={() => <Page id={"page-1"} />} />
                        <Route path="/services" render={() => <Page id={"page-2"} />} />
                        <Route path="/contact" render={() => <Page id={"page-3"} />} />
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