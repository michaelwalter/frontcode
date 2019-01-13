import * as React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import {actions} from "../../actions";

interface ComponentProps {
    modifiers: string,
    pages: {
        list: Array<any>,
        active: string
    },
    onChangePageClick: any
}

/**
 * AppNavigationContainer
 *
 */
class AppNavigationContainer extends React.Component<ComponentProps> {
    onChangePageClick (pageId) {
        this.props.onChangePageClick(pageId);
    }

    render () {
        return <AppNavigationComponent modifiers={this.props.modifiers || ''} pages={this.props.pages.list} active={this.props.pages.active} onChangePageClick={this.onChangePageClick.bind(this)} />
    }
}

/**
 * AppNavigationComponent
 *
 * @param props
 * @constructor
 */
const AppNavigationComponent = props => {
    const toggleActiveClass = (pageId) => {
        return pageId === props.active ? ' active ' : '';
    };

    const onChangePageClick = pageId => {
        return event => {
            props.onChangePageClick(pageId);
        }
    };
    const navigationItems = props.pages.map((page, index) => (
        <li className={"app-navigation__item" + toggleActiveClass(page.id)} onClick={onChangePageClick(page.id)} key={index}>
            <Link to={page.url} className="app-navigation__link">{page.name}</Link>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangePageClick: (pageId) => {
            dispatch(actions.site.changePage(pageId));
            dispatch(actions.responsiveMenu.toggleOpen('close'))
        }
    }
};

export const AppNavigation = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppNavigationContainer);