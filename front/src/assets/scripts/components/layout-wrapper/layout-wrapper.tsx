import * as React from 'react';
import {AppHeader} from "../app-header/app-header";
import {AppFooter} from "../app-footer/app-footer";

export class LayoutWrapper extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="app-wrapper">
                <AppHeader />
                <main className="app-main">
                    {this.props.children}
                </main>
                <AppFooter />
            </div>
        )
    }
};

export default LayoutWrapper;