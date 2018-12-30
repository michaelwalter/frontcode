import * as React from "react";

export class Contact extends React.Component<{}, {}> {
    constructor (props, state) {
        super (props, state);
    }

    render() {
        return (
            <div className="app-route">
                <article className="app-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-content">
                                    <section className="custom-heading || app-component">
                                        <h1 className="custom-heading__title">
                                            <span>Jesteś zainteresowany współpracą?</span>
                                        </h1>
                                        <h2 className="custom-heading__subtitle">
                                            <span>Napisz do nas lub zadzwoń.</span>
                                        </h2>
                                    </section>

                                    <section className="separator separator--small separator--transparent">
                                        <hr />
                                    </section>

                                    <section className="app-text || app-component">
                                        <div className="app-text__content">
                                            <p>Jeżeli potrzebujesz naszej pomocy, chcesz wesprzeć jedną z naszych
                                                inicjatyw bądź szukasz zespołu, w którym mogłbyś się rozwinąć zapraszamy
                                                do kontaktu.</p>
                                        </div>
                                    </section>

                                    <section className="separator separator--small separator--transparent">
                                        <hr />
                                    </section>

                                    <section className="contact-boxes || app-component">
                                        <ul className="contact-boxes__list">
                                            <li className="contact-boxes__item">
                                                <section className="contact-box">
                                                    <section className="app-text || app-component">
                                                        <h4><strong>Kontakt telefoniczny</strong></h4>
                                                        <p>Zadzwoń do nas i umów się na spotkanie. Możemy również
                                                            przyjechać do Ciebie.</p>
                                                        <p>&nbsp;</p>
                                                    </section>
                                                    <section className="app-text || app-component">
                                                        <div className="app-text__content">
                                                            <p className="h-color--secondary"><strong>+48 502 098
                                                                745</strong></p>
                                                        </div>
                                                    </section>
                                                </section>
                                            </li>

                                            <li className="contact-boxes__item">
                                                <section className="contact-box">
                                                    <section className="app-text || app-component">
                                                        <h4><strong>Kontakt mailowy</strong></h4>
                                                        <p>Napisz nam o swoich potrzebach i celach a oddzwonimy do
                                                            Ciebie z pomysłem rozwiązania oraz propozycją wspólnej
                                                            współpracy.</p>
                                                        <p>&nbsp;</p>
                                                    </section>
                                                    <section className="app-text || app-component">
                                                        <p className="h-color--secondary"><a
                                                            href="mailto:hello@frontocde.pl"><strong>hello@frontcode.pl</strong></a>
                                                        </p>
                                                    </section>
                                                </section>
                                            </li>
                                        </ul>
                                    </section>

                                    <section className="separator separator--x-small separator--transparent">
                                        <hr />
                                    </section>

                                    <section className="banner banner--default || app-component">
                                        <div className="banner__content">
                                            <p className="banner__title">Rozwijamy sukcesywnie własne produkty</p>
                                            <p className="banner__subtitle">Jeżeli jesteś otwarty na współpracę z nami w
                                                tym zakresie, zadzwoń lub napisz.</p>
                                            <button className="banner__button || btn btn--light btn--rounded">Dowiedz
                                                się więcej o naszych produktach
                                            </button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}