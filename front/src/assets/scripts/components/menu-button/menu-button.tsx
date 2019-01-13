import * as React from "react";
import { connect } from "react-redux";
import { actions } from "../../actions";

interface ComponentProps {
    isOpen: boolean
    onMounted: any
    onToggleActiveClick: any
}

class MenuButtonContainer extends React.Component<ComponentProps> {
    onToggleActiveClick() {
        return event => {
            this.props.onToggleActiveClick();
        }
    }

    render () {
        const toggleActiveClass = () => {
            return this.props.isOpen ? ' menu-button--active ' : '';
        };
        return (
            <div className={"menu-button" + toggleActiveClass()}>
                <button className="menu-button__hamburger" onClick={this.onToggleActiveClick()}>
                    <span>&nbsp;</span>
                </button>
            </div>
        )
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

export const MenuButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuButtonContainer);