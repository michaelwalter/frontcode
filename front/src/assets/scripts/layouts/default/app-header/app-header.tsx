import * as React from "react";
import {Route, Link} from "react-router-dom";
import {Languages} from "../../../components/language-selector/language-selector";
import {MenuButton} from "../../../components/menu-button/menu-button";
import {AppNavigation} from "../../../components/app-navigation/app-navigation";

export class AppHeader extends React.Component {
    render(): JSX.Element {
        return (
            <header className="app-header">
                <div className="app-header__content">
                    <div className="app-header__row">
                        <div className="row middle-xs">
                            <div className="col-md-3">
                                <div className="app-logo">
                                    <a href="/" className="app-logo__link">
                                        <img src="assets/images/frontcode-light.svg" className="app-logo__picture"
                                             alt="frontcode" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-md-6 text-center h-hidden--mobile h-hidden--tablet">
                                <AppNavigation modifiers="app-navigation--base" />
                            </div>

                            <div className="col-md-3 text-right h-hidden--mobile h-hidden--tablet">
                                <Languages />
                            </div>

                            <div className="col-md-9 text-right h-hidden--desktop">
                                <MenuButton />
                            </div>
                        </div>
                    </div>
                </div>
            </header>);
    }
}