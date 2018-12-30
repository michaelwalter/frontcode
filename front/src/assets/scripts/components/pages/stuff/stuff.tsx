import * as React from "react";

export class Stuff extends React.Component<{}, {}> {
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
                                        <h1 className="custom-heading__title">Autorskie produkty przez nas rozwijane</h1>
                                        <h2 className="custom-heading__subtitle">Lista pomysłów oraz projektów aktualnie
                                            przez nas prowadzonych.</h2>
                                    </section>

                                    <section className="separator separator--transparent">
                                        <hr />
                                    </section>

                                    <section className="product || app-component">
                                        <div className="product__container">
                                            <div className="product__counter">
                                                <span>01</span>
                                            </div>
                                            <div className="product__content">
                                                <div className="product__logo">
                                                    <img src="assets/images/products/dropp.svg" alt="dropp." />
                                                </div>
                                                <div className="product__text">
                                                    <div className="product__name">
                                                        <h1 className="product__title">
                                                            <span>dropp.</span>
                                                        </h1>
                                                        <h4 className="product__subtitle">Aplikacja społecznościowa bazująca
                                                            na technologi Augmented Reality</h4>
                                                    </div>
                                                    <div className="product__description">
                                                        <section className="app-text || app-component">
                                                            <div className="app-text__content">
                                                                <p>Aplikacja służy do dzielenia się ze społecznością swoimi
                                                                    wspomnieniami związanymi z wybranymi miejscami na
                                                                    świecie.</p>
                                                                <p>&nbsp;</p>
                                                                <p>Wykorzystując technologię AR możesz przeglądać zdjęcia i
                                                                    filmy osób, które znalazły się w miejscu obecnie przez
                                                                    Ciebie odwiedzanym. Ponadto sam możesz w tym miejscu
                                                                    "upuścić" własne zdjęcie i określić kto może je
                                                                    zobaczyć.</p>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="separator separator--transparent">
                                        <hr />
                                    </section>

                                    <section className="product product--inverse || app-component">
                                        <div className="product__container">
                                            <div className="product__counter">
                                                <span>02</span>
                                            </div>
                                            <div className="product__content">
                                                <div className="product__text">
                                                    <div className="product__name">
                                                        <h1 className="product__title">
                                                            <span>startify</span>
                                                        </h1>
                                                        <h4 className="product__subtitle">Środowisko do prowadzenia oraz
                                                            rozwoju statycznych projektów Front End</h4>
                                                    </div>
                                                    <div className="product__description">
                                                        <section className="app-text || app-component">
                                                            <div className="app-text__content">
                                                                <p>Startify umożliwa błyskawiczne rozpoczęcie projektu z
                                                                    wykorzystaniem takich technologii jak Typescript, Sass,
                                                                    Nunjucks etc. przy wsparciu Gulpa oraz Webpacka.</p>
                                                                <p>&nbsp;</p>
                                                                <p>W projektach rozwijanych za pomocą Startify stawiamy na
                                                                    komponentowy podział funkcjonalności.</p>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                                <div className="product__logo">
                                                    <img src="assets/images/products/startify.svg" alt="dropp." />
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section className="separator separator--transparent">
                                        <hr />
                                    </section>

                                    <section className="product || app-component">
                                        <div className="product__container">
                                            <div className="product__counter">
                                                <span>03</span>
                                            </div>
                                            <div className="product__content">
                                                <div className="product__logo">
                                                    <img src="assets/images/products/kret.svg" alt="dropp." />
                                                </div>
                                                <div className="product__text">
                                                    <div className="product__name">
                                                        <h1 className="product__title">
                                                            <span>kret</span>
                                                        </h1>
                                                        <h4 className="product__subtitle">Aplikacja wspomagająca
                                                            rehabilitację dzieci z zespołem Retta</h4>
                                                    </div>
                                                    <div className="product__description">
                                                        <section className="app-text || app-component">
                                                            <div className="app-text__content">
                                                                <p>Kret to zbiór zadań oraz gier efektywnie wspomagających
                                                                    rehabilitację dzieci cierpiących na zespół Retta.</p>
                                                                <p>&nbsp;</p>
                                                                <p>Aplikacja ta jest zupełnie darmowa i dostępna dla każdej
                                                                    osoby chcącej wesprzeć rozwój swojego dziecka ze
                                                                    wspomnianym zespołem.</p>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
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