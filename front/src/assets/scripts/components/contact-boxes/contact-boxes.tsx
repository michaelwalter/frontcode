import * as React from "react";

interface ComponentProps {
    id: string
    modifiers: string
}

export class ContactBoxes extends React.Component<ComponentProps, {}> {
    constructor (props) {
        super (props);
    }

    render(): JSX.Element {
        return (
            <section className="contact-boxes || app-component">
                <ul className="contact-boxes__list">
                    <li className="contact-boxes__item">
                        <section className="contact-box">
                            <section className="app-text || app-component">
                                <h4><strong>Kontakt telefoniczny</strong></h4>
                                <p>Zadzwoń do nas i umów się na spotkanie. Możemy również przyjechać do Ciebie.</p>
                                <p>&nbsp;</p>
                            </section>
                            <section className="app-text || app-component">
                                <div className="app-text__content">
                                    <p className="h-color--secondary"><strong>+48 502 098 745</strong></p>
                                </div>
                            </section>
                        </section>
                    </li>

                    <li className="contact-boxes__item">
                        <section className="contact-box">
                            <section className="app-text || app-component">
                                <h4><strong>Kontakt mailowy</strong></h4>
                                <p>Napisz nam o swoich potrzebach i celach a oddzwonimy do Ciebie z pomysłem rozwiązania
                                    oraz propozycją wspólnej współpracy.</p>
                                <p>&nbsp;</p>
                            </section>
                            <section className="app-text || app-component">
                                <p className="h-color--secondary"><a
                                    href="mailto:hello@frontocde.pl"><strong>hello@frontcode.pl</strong></a></p>
                            </section>
                        </section>
                    </li>
                </ul>
            </section>
        );
    }
}