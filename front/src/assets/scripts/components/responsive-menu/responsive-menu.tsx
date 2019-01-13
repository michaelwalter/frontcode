import * as React from "react";
import { connect } from "react-redux";
import { actions } from "../../actions";
import {AppNavigation} from "../app-navigation/app-navigation";

interface ComponentProps {
    isOpen: boolean
    onToggleActiveClick: any
}

class ResponsiveMenuComponent extends React.Component<ComponentProps> {
    onToggleActiveClick() {
        return event => {
            this.props.onToggleActiveClick();
        }
    }

    render () {
        const toggleActiveClass = () => {
            return this.props.isOpen ? ' active ' : '';
        };
        if (this.props.isOpen) {
            return (
                <section className={"responsive-menu" + toggleActiveClass()}>
                    <div className="responsive-menu__container">
                        <div className="responsive-menu__header">
                            <button className="responsive-menu__close" onClick={this.onToggleActiveClick()}>
                                <i className="f-icon--close"/>
                            </button>
                        </div>
                        <div className="responsive-menu__content">
                            <AppNavigation modifiers="app-navigation--large"/>
                        </div>
                    </div>
                </section>
            )
        } else {
            return false;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.responsiveMenu
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleActiveClick: () => {
            dispatch(actions.responsiveMenu.toggleOpen());
        }
    }
};

export const ResponsiveMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResponsiveMenuComponent);