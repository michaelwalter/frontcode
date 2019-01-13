import * as React from "react";

interface ComponentProps {
    id: string
    title: string
    subtitle: string
}

export class CustomHeading extends React.Component<ComponentProps, {}> {
    constructor (props) {
        super (props);
    }

    render(): JSX.Element {
        return (
            <section className="custom-heading || app-component">
                <h1 className="custom-heading__title">{this.props.title}</h1>
                <h2 className="custom-heading__subtitle">{this.props.subtitle}</h2>
            </section>
        );
    }
}