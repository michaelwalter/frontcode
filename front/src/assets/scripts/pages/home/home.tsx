import * as React from "react";
import {Mocks} from "../../utils/mocks";
import {LayoutBuilder} from "../../layouts/default/layout-builder";

const stateMock = Mocks["page-0"];

export class Home extends React.Component<{}, {}> {
    constructor (props, state) {
        super (props, state);
    }

    componentDidMount(): void {
        this.setState({ ...Object.assign({}, stateMock) });
    }

    render () {
        return (
            <LayoutBuilder {...this.state} />
        );
    }
}