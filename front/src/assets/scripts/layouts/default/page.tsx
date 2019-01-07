import * as React from "react";
import {Mocks} from "../../utils/mocks";
import {LayoutBuilder} from "./layout-builder";

interface ComponentProps {
    id: string
}

export class Page extends React.Component<ComponentProps, {}> {
    constructor (props, state) {
        super (props, state);
    }

    componentDidMount(): void {
        const stateMock = Mocks[this.props.id] || {};
        this.setState({ ...Object.assign({}, stateMock) });
    }

    render () {
        return (
            <LayoutBuilder {...this.state} />
        );
    }
}