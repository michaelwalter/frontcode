import * as React from "react";
import { connect } from "react-redux";
import {LayoutBuilder} from "./layout-builder";
import {actions} from "../../actions";

interface ComponentProps {
    routeId: string
    getPageData: any
}

export class PageContainer extends React.Component<ComponentProps> {
    componentDidMount(): void {
        this.props.getPageData(this.props.routeId);
    }

    componentWillReceiveProps(nextProps): void {
        if (nextProps.routeId !== this.props.routeId) {
            this.props.getPageData(nextProps.routeId);
        }
    }

    render () {
        return (
            <LayoutBuilder {...this.props} key={this.props.routeId} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.pageContent,
        routeId: ownProps.routeId
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getPageData: (routeId) => {
            dispatch(actions.pageContent.asyncActions.fetchPageContentWithRedux(routeId));
        }
    }
};

export const Page = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageContainer);