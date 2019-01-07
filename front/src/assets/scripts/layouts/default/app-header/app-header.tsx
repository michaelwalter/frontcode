import * as React from "react";
import {Route, Link} from "react-router-dom";

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

                            <div className="col-md-6 text-center">
                                {/*<nav className="app-navigation app-navigation--base">*/}
                                    {/*<ul className="app-navigation__list">*/}
                                        {/*<Route path="/home" children={({ match }) => (*/}
                                            {/*<li className={"app-navigation__item" + (match ? " active " : "")}>*/}
                                                {/*<Link to="/home" className="app-navigation__link">Strona główna</Link>*/}
                                            {/*</li>*/}
                                        {/*)} />*/}

                                        {/*<Route path="/stuff" children={({ match }) => (*/}
                                            {/*<li className={"app-navigation__item" + (match ? " active " : "")}>*/}
                                                {/*<Link to="/stuff" className="app-navigation__link">Produkty</Link>*/}
                                            {/*</li>*/}
                                        {/*)} />*/}

                                        {/*<Route path="/services" children={({ match }) => (*/}
                                            {/*<li className={"app-navigation__item" + (match ? " active " : "")}>*/}
                                                {/*<Link to="/services" className="app-navigation__link">Usługi</Link>*/}
                                            {/*</li>*/}
                                        {/*)} />*/}

                                        {/*<Route path="/contact" children={({ match }) => (*/}
                                            {/*<li className={"app-navigation__item" + (match ? " active " : "")}>*/}
                                                {/*<Link to="/contact" className="app-navigation__link">Kontakt</Link>*/}
                                            {/*</li>*/}
                                        {/*)} />*/}
                                    {/*</ul>*/}
                                {/*</nav>*/}
                            </div>

                            <div className="col-md-3 text-right">
                                <ul className="app-languages">
                                    <li className="app-languages__language app-languages__language--disabled">
                                        <a href="#" className="app-languages__language-link">pl</a>
                                    </li>
                                    <li className="app-languages__language || current">
                                        <a href="#" className="app-languages__language-link">en</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>);
    }
}