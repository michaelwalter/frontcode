import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface ComponentProps {
    instanceId: string
    title: string
    description: string
    currentSpecialWordIndex: number
    url: string
    error: any
    loading: Boolean,
    onMounted: any,
    onChangeSloganTextClick: any
}

export class Slogan extends React.Component<ComponentProps> {
    constructor (props) {
        super (props);
    }

    render () {
        return <SloganComponent {...this.props} />
    }
}

const SloganComponent = props => {
    return (
        <section className="slogan || text-center app-component" data-component="slogan">
            <div className="slogan__content">
                <h1 className="slogan__title" dangerouslySetInnerHTML={{__html: props.title}}></h1>
                <p className="slogan__text">{props.description}</p>
                <Link to={props.url} className="btn btn--light btn--rounded">Dowiedz się więcej</Link>
            </div>
        </section>
    )
};