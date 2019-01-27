import * as React from "react";
import {Link} from "react-router-dom";

interface ComponentProps {
    id: string
    modifiers: string
}

export class Banner extends React.Component<ComponentProps, {}> {
    constructor (props) {
        super (props);
    }

    render(): JSX.Element {
        return (
            <section className="banner banner--default || app-component">
                <div className="banner__content">
                    <p className="banner__title">Rozwijamy sukcesywnie własne produkty</p>
                    <p className="banner__subtitle">Jeżeli jesteś otwarty na współpracę z nami w tym zakresie, zadzwoń
                        lub napisz.</p>
                    <Link to={'/stuff'} className="banner__button || btn btn--secondary btn--rounded">Dowiedz się więcej o naszych
                        produktach
                    </Link>
                </div>
            </section>
        );
    }
}