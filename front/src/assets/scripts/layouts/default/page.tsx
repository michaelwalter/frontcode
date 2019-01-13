import * as React from "react";
import { connect } from "react-redux";
// import {Mocks} from "../../utils/mocks";
import {LayoutBuilder} from "./layout-builder";
import {actions} from "../../actions";

interface ComponentProps {
    id: string
    onMounted: any
}

export class PageContainer extends React.Component<ComponentProps> {
    componentDidMount(): void {
        this.props.onMounted();
    }

    render () {
        return (
            <LayoutBuilder {...this.props} key={this.props.id} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.pageContent
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onMounted: () => {
            dispatch(actions.pageContent.asyncActions.fetchPageContentWithRedux(ownProps.id));
        }
    }
};

export const Page = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageContainer);