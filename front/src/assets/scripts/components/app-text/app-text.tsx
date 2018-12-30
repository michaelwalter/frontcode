import * as React from "react";
import {Mocks} from "../../utils/mocks";

interface ComponentProps {
    id: string
}

interface ComponentState {
    content: string
    modifiers: string
}

export class AppText extends React.Component<ComponentProps, ComponentState> {

    constructor (props) {
        super (props);
        this.state = {
            content: "",
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
            <section className={"app-text" + " " + this.state.modifiers + " || app-component"}>
                <div className="app-text__content" dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            </section>
        );
    }
}