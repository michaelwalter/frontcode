import * as React from "react";
import {Mocks} from "../../utils/mocks";

interface ComponentProps {
    id: string
}

interface ComponentState {
    modifiers: string
}

export class Banner extends React.Component<ComponentProps, ComponentState> {

    constructor (props) {
        super (props);
        this.state = {
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
            <section className="banner banner--default || app-component">
                <div className="banner__content">
                    <p className="banner__title">Rozwijamy sukcesywnie własne produkty</p>
                    <p className="banner__subtitle">Jeżeli jesteś otwarty na współpracę z nami w tym zakresie, zadzwoń
                        lub napisz.</p>
                    <button className="banner__button || btn btn--light btn--rounded">Dowiedz się więcej o naszych
                        produktach
                    </button>
                </div>
            </section>
        );
    }
}