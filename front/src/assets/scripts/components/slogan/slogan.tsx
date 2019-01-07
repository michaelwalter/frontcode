import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../actions";

interface ComponentProps {
    instanceId: string
    title: string
    description: string
    currentSpecialWordIndex: number
    url: string
    error: any
    loading: Boolean,
    onMounted: any,
    onChangeSloganTextClick: any
}

class SloganComponent extends React.Component<ComponentProps> {
    componentDidMount(): void {
        this.props.onMounted();
    }

    componentWillUnmount(): void {

    }

    render(): JSX.Element {
        if (this.props.loading) {
            return (<p>Loading...</p>)
        }
        return (
            <section className="slogan || text-center app-component" data-component="slogan">
                <div className="slogan__content">
                    <h1 className="slogan__title" dangerouslySetInnerHTML={{__html: this.props.title}}></h1>
                    <p className="slogan__text">{this.props.description}</p>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.slogan[ownProps.instanceId]
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onMounted: () => {
            dispatch(actions.slogan.asyncActions.fetchSloganWithRedux(ownProps.instanceId));
        },
        onChangeSloganTextClick: () => {
            dispatch(actions.slogan.changeSloganSpecialWord(ownProps.instanceId));
        }
    }
};

export const Slogan = connect(
    mapStateToProps,
    mapDispatchToProps
)(SloganComponent);