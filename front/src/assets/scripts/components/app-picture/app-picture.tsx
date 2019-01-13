import * as React from "react";

interface ComponentProps {
    id: string
    title: string
    url: string
    modifiers: string
}

export class AppPicture extends React.Component<ComponentProps, {}> {
    constructor (props) {
        super (props);
    }

    render(): JSX.Element {
        return (
            <section className={"app-picture" + " " + this.props.modifiers + " || app-component"}>
                <img src={this.props.url} alt={this.props.title} />
            </section>
        );
    }
}