import * as React from "react";
import { connect } from "react-redux";
import { Route, Link, withRouter } from "react-router-dom";
import {actions} from "../../actions";

interface ComponentProps {
    modifiers: string,
    routes: {
        list: Array<any>,
        active: string
    },
    location: any,
    history: any
}

/**
 * AppNavigationContainer
 *
 */
class AppNavigationContainer extends React.Component<ComponentProps> {
    render () {
        return <AppNavigationComponent modifiers={this.props.modifiers || ''} routes={this.props.routes} />
    }
}

/**
 * AppNavigationComponent
 *
 * @param props
 * @constructor
 */
const AppNavigationComponent = props => {
    const toggleActiveClass = (routeValue) => {
        return routeValue === props.routes.active ? ' active ' : '';
    };

    const navigationItems = props.routes.list.map((route, index) => (
        <li className={"app-navigation__item" + toggleActiveClass(route.value)} key={index}>
            <Link to={route.value} className="app-navigation__link">{route.name}</Link>
        </li>
    ));
    return (
        <nav className={"app-navigation " + props.modifiers}>
            <ul className="app-navigation__list">
                {navigationItems}
            </ul>
        </nav>
    );
};


/**
 * Setup props into Container and Component
 *
 */
const mapStateToProps = (state, ownProps) => {
    return {
        ...state.site
    }
};

export const AppNavigation = connect(
    mapStateToProps
)(AppNavigationContainer);