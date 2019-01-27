import * as React from "react";

interface ComponentProps {
    id: string
    counter: string
    title: string
    subtitle: string
    logoUrl: string
    description: string
    modifiers: string
}

export class Product extends React.Component<ComponentProps, {}> {
    constructor (props) {
        super (props);
    }

    render(): JSX.Element {
        return (
            <section className={"product" + " " + this.props.modifiers + " || app-component"}>
                <div className="product__container">
                    <div className="product__counter">
                        <span>{this.props.counter}</span>
                    </div>
                    <div className="product__content">
                        <header className="product__header">
                            <div className="product__logo">
                                <img src={this.props.logoUrl} alt={this.props.title} />
                            </div>
                            <div className="product__name">
                                <h1 className="product__title">
                                    <span>{this.props.title}</span>
                                </h1>
                                <h4 className="product__subtitle">{this.props.subtitle}</h4>
                            </div>
                        </header>
                        <div className="product__text">
                            <div className="product__description">
                                <section className="app-text || app-component">
                                    <div className="app-text__content" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}