import * as React from "react";
import {Mocks} from "../../utils/mocks";

interface ComponentProps {
    id: string
}

interface ComponentState {
    title: string
    subtitle: string
}

export class CustomHeading extends React.Component<ComponentProps, ComponentState> {

    constructor (props) {
        super (props);
        this.state = {
            title: "",
            subtitle: ""
        };
    }

    componentDidMount(): void {
        this.setState({...Object.assign({}, Mocks[this.props.id])});
    }

    componentWillUnmount(): void {

    }

    render(): JSX.Element {
        return (
            <section className="custom-heading || app-component">
                <h1 className="custom-heading__title">{this.state.title}</h1>
                <h2 className="custom-heading__subtitle">{this.state.subtitle}</h2>
            </section>
        );
    }
}