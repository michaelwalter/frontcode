import * as React from "react";

interface SloganProps {
    id: string
}

interface SloganState {
    title: string;
    description: string;
    url: string;
    specialWords: Array<string>,
    currentSpecialWordIndex: number,
    titleWithSpecialWord: string
}


export class Slogan extends React.Component<SloganProps, SloganState> {

    constructor (props) {
        super (props);
        this.initializeState();
    }

    componentDidMount(): void {
        fetch("https://df764933-a9ed-4745-9a3f-06b41dad4dc2.mock.pstmn.io/api/slogan")
            .then(res => res.json())
            .then(json => {
                this.setState({ ...Object.assign({}, json) }, () => {
                    this.initializeRenderers();
                });
            });
    }

    private initializeState (): void {
        this.state = {
            title: "",
            description: "",
            url: "",
            specialWords: [],
            currentSpecialWordIndex: 0,
            titleWithSpecialWord: ""
        };
    }

    private initializeRenderers (): void {
        this.titleCarousel();
    }

    private titleCarousel (): void {
        let counter = 0;
        const start = () => {
            setInterval(() => {
                counter = this.state.specialWords[counter + 1] ? counter + 1 : 0;
                this.setState({
                    titleWithSpecialWord: this.renderTile(this.state.specialWords[counter]),
                    currentSpecialWordIndex: counter
                });
            }, 3000);
        };
        this.setState({
            titleWithSpecialWord: this.renderTile(this.state.specialWords[counter])
        },  start);
    }

    private renderTile (specialWord): string {
        return this.state.title.replace('${specialWord}', specialWord);
    };

    render(): JSX.Element {
        return (
            <section className="slogan || text-center app-component" data-component="slogan">
                <div className="slogan__content">
                    <h1 className="slogan__title" dangerouslySetInnerHTML={{__html: this.state.titleWithSpecialWord}}></h1>
                    <p className="slogan__text">{this.state.description}</p>
                    <a href={this.state.url} className="slogan__button || btn btn--light btn--rounded btn--outline">
                        Dowiedz się więcej
                    </a>
                </div>
            </section>
        );
    }
}