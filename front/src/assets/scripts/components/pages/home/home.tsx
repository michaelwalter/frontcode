import * as React from "react";
import {Slogan} from "../../slogan/slogan";

interface State {
    slogan: {
        title: string,
        description: string,
        url: string,
        specialWords: Array<string>
    }
}

export class Home extends React.Component<{}, State> {
    constructor (props, state) {
        super (props, state);
    }

    render() {
        return (
            <div className="app-route">
                <article className="app-section app-section--cover">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-content">
                                    <Slogan id="had6a6da4ds65" />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}