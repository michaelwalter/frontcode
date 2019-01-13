import * as React from "react";

interface ComponentProps {
    id: string
    content: string
    modifiers: string
}

export class AppText extends React.Component<ComponentProps, {}> {
    constructor (props) {
        super (props);
    }

    render(): JSX.Element {
        return (
            <section className={"app-text" + " " + this.props.modifiers + " || app-component"}>
                <div className="app-text__content" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
            </section>
        );
    }
}