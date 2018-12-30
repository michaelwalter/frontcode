import * as React from "react";
import {Mocks} from "../../utils/mocks";

interface ComponentProps {
    id: string
}

interface ComponentState {
    title: string
    url: string
    modifiers: string
}

export class AppPicture extends React.Component<ComponentProps, ComponentState> {

    constructor (props) {
        super (props);
        this.state = {
            title: "",
            url: "",
            modifiers: ""
        };
    }

    componentDidMount(): void {
        this.setState({...Object.assign({}, Mocks[this.props.id])});
    }

    componentWillUnmount(): void {

    }

    render(): JSX.Element {
        return (
            <section className={"app-picture" + " " + this.state.modifiers + " || app-component"}>
                <img src={this.state.url} alt={this.state.title} />
            </section>
        );
    }
}