import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Mocks } from "../../utils/mocks";
import { changeTitleSpecialWord } from "../../actions";
import {changeTitleSpecialWordReducer} from "../../reducers/change-title-special-word";

interface ComponentProps {
    id: string,
    changeTitleSpecialWord: any,
    titleWithSpecialWord: string
}

interface ComponentState {
    title: string
    description: string
    url: string
    specialWords: Array<string>
    currentSpecialWordIndex: number
}

class SloganComponent extends React.Component<ComponentProps, ComponentState> {
    private carouselInterval: any;

    readonly state: ComponentState = {
        title: "Frontcode",
        description: "Tworzymy nową rzeczywistość od podstaw",
        url: "",
        specialWords: [],
        currentSpecialWordIndex: 0
    };


    componentDidMount(): void {
        console.log('PROPS', this.props, this.state);
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
                // this.setState({
                //     titleWithSpecialWord: this.renderTitle(this.state.specialWords[counter]),
                //     currentSpecialWordIndex: counter
                // });
                this.props.changeTitleSpecialWord();
                console.log('Component props: ', this.props);
            }, 3000);
        };
        // start();
        // this.setState({
        //     titleWithSpecialWord: this.renderTitle(this.state.specialWords[counter])
        // },  start);
    }

    private renderTitle (specialWord): string {
        return this.state.title.replace('${specialWord}', specialWord);
    };

    render(): JSX.Element {
        return (
            <section className="slogan || text-center app-component" data-component="slogan">
                <div className="slogan__content">
                    <h1 className="slogan__title">{this.props.titleWithSpecialWord}</h1>
                    <p className="slogan__text">{this.state.description}</p>
                    <button onClick={this.props.changeTitleSpecialWord}>Change Word</button>
                    {/*<Link to={this.state.url} className="slogan__button || btn btn--light btn--rounded btn--outline">Dowiedz się więcej</Link>*/}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    console.log('STATE: ', state);
    return {
        titleWithSpecialWord: state.changeTitleSpecialWordReducer
    };
};

const mapDispatchToProps = {changeTitleSpecialWord};

export const Slogan = connect(
    mapStateToProps,
    mapDispatchToProps
)(SloganComponent);