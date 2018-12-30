import * as React from "react";
import {Mocks} from "../../utils/mocks";

interface ComponentProps {
    id: string
}

interface ComponentState {
    counter: string
    title: string
    subtitle: string
    logoUrl: string
    description: string
    modifiers: string
}

export class Product extends React.Component<ComponentProps, ComponentState> {

    constructor (props) {
        super (props);
        this.state = {
            "counter": "",
            "title": "",
            "subtitle": "",
            "logoUrl": "",
            "description": "",
            "modifiers": ""
        };
    }

    componentDidMount(): void {
        this.setState({...Object.assign({}, Mocks[this.props.id])});
    }

    componentWillUnmount(): void {

    }

    render(): JSX.Element {
        return (
            <section className={"product" + " " + this.state.modifiers + " || app-component"}>
                <div className="product__container">
                    <div className="product__counter">
                        <span>{this.state.counter}</span>
                    </div>
                    <div className="product__content">
                        <div className="product__logo">
                            <img src={this.state.logoUrl} alt={this.state.title} />
                        </div>
                        <div className="product__text">
                            <div className="product__name">
                                <h1 className="product__title">
                                    <span>{this.state.title}</span>
                                </h1>
                                <h4 className="product__subtitle">{this.state.subtitle}</h4>
                            </div>
                            <div className="product__description">
                                <section className="app-text || app-component">
                                    <div className="app-text__content" dangerouslySetInnerHTML={{__html: this.state.description}}></div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}