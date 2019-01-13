import * as React from "react";

interface ComponentProps {
    id: string
    modifiers: string
}

export class Separator extends React.Component<ComponentProps, {}> {
    constructor (props) {
        super (props);
    }

    render(): JSX.Element {
        return (
            <section className={"separator" + " " + this.props.modifiers}>
                <hr />
            </section>
        );
    }
}