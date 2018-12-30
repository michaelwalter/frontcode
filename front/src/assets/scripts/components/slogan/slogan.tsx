import * as React from "react";
import {Link} from "react-router-dom";
import {Mocks} from "../../utils/mocks";

interface ComponentProps {
    id: string
}

interface ComponentState {
    title: string
    description: string
    url: string
    specialWords: Array<string>
    currentSpecialWordIndex: number
    titleWithSpecialWord: string
}

export class Slogan extends React.Component<ComponentProps, ComponentState> {
    private carouselInterval: any;

    constructor (props) {
        super (props);
        this.state = {
            title: "Frontcode",
            description: "Tworzymy nową rzeczywistość od podstaw",
            url: "",
            specialWords: [],
            currentSpecialWordIndex: 0,
            titleWithSpecialWord: ""
        };
    }

    componentDidMount(): void {
        this.setState({...Object.assign({}, Mocks[this.props.id])}, () => {
           this.initializeRenders();
        });
    }

    componentWillUnmount(): void {
        clearInterval(this.carouselInterval);
    }

    private initializeRenders (): void {
        this.titleCarousel();
    }

    private titleCarousel (): void {
        let counter = 0;
        const start = () => {
            this.carouselInterval = setInterval(() => {
                counter = this.state.specialWords[counter + 1] ? counter + 1 : 0;
                this.setState({
                    titleWithSpecialWord: this.renderTitle(this.state.specialWords[counter]),
                    currentSpecialWordIndex: counter
                });
            }, 3000);
        };
        this.setState({
            titleWithSpecialWord: this.renderTitle(this.state.specialWords[counter])
        },  start);
    }

    private renderTitle (specialWord): string {
        return this.state.title.replace('${specialWord}', specialWord);
    };

    render(): JSX.Element {
        return (
            <section className="slogan || text-center app-component" data-component="slogan">
                <div className="slogan__content">
                    <h1 className="slogan__title" dangerouslySetInnerHTML={{__html: this.state.titleWithSpecialWord}}></h1>
                    <p className="slogan__text">{this.state.description}</p>
                    <Link to={this.state.url} className="slogan__button || btn btn--light btn--rounded btn--outline">Dowiedz się więcej</Link>
                </div>
            </section>
        );
    }
}