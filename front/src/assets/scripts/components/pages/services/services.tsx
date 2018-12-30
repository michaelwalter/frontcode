import * as React from "react";

export class Services extends React.Component<{}, {}> {
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
                                        <h1 className="custom-heading__title">W czym się specjalizujemy?</h1>
                                        <h2 className="custom-heading__subtitle">Przeczytaj i dowiedz się w jakim
                                            zakresie jesteśmy w stanie Tobie skutecznie pomóc.</h2>
                                    </section>

                                    <section className="separator separator--transparent">
                                        <hr />
                                    </section>

                                    <section className="app-text || app-component">
                                        <div className="app-text__content">
                                            <h3><strong>W kilku zdaniach</strong></h3>
                                            <p>Nasz zespół specjalizuje się w wytwarzaniu oprogramowania warstwy Front
                                                End aplikacji oraz serwisów webowych.</p>
                                            <p>Dostarczamy ponadto rozwiązania mobilne wykorzystując przy tym najnowsze
                                                i najbardziej wydajne aktualnie rozwiązania.</p>
                                            <p>Ukierunkowani w myśl, że nie ma rzeczy niemożliwych do zrealizowania
                                                stale podnosimy poprzeczkę rozwijając przy tym swoje umiejętności i
                                                nabierając cennego doświadczenia.</p>
                                            <p>Świadomie i starannie dobieramy technologie, architekturę oraz
                                                rozwiązania najbardziej odpowiadające potrzebom naszych klientów.</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="app-section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-content">
                                <section className="app-picture app-picture--wide || app-component">
                                    <img src="./assets/images/team-picture.jpg" alt="Office" />
                                </section>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="app-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-content">
                                    <section className="app-text || app-component">
                                        <div className="app-text__content">
                                            <h3><strong>O nas</strong></h3>
                                            <p>Jesteśmy grupą osób dobraną nie z przypadku a uzupełniającą się
                                                umiejętnościami w obszarze Front End Developmentu.</p>
                                            <p>Każdy z nas posiada conajmniej kilkuletnie, komercyjne doświadczenie
                                                oferując tym samym usługi wysokiej jakości.</p>
                                            <p>Na codzień współpracujemy wspólnie w jednym biurze choć spora część z nas
                                                docenia sobie pracę zdalną będąc przy tym bardzo elastycznym. To
                                                sprawia, że jesteśmy w stanie spotkać się z klientami na terenie
                                                niemalże całego kraju.</p>
                                        </div>
                                    </section>

                                    <section className="separator separator--transparent">
                                        <hr />
                                    </section>

                                    <section className="app-text || app-component">
                                        <div className="app-text__content">
                                            <h3><strong>Jak możemy Tobie pomóc?</strong></h3>
                                            <p>Generalnie jesteśmy programistami Front End. W tym zakresie działań
                                                czujemy się najpewniej i gwarantujemy dokładność, wysoką jakość oraz
                                                wytwarzanie oprogramowania zgodnie ze sztuką i najlepszymi zasadami.</p>
                                            <p>&nbsp;</p>
                                            <p>Ponadto jesteśmy w stanie realizować projekty kompleksowo - rozwój jest
                                                dla nas najcenniejszy. Współpracujemy na tej płaszczyźnie z wieloma
                                                doświadczonymi programistami oraz architektami. Krótko mówiąc - nie ma
                                                dla nas rzeczy niemożliwych.</p>
                                        </div>
                                    </section>

                                    <section className="separator separator--transparent">
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