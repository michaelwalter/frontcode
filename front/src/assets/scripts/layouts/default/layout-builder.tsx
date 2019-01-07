import * as React from "react";
import Components from "../../components/components";

export class LayoutBuilder extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className="app-route">
                {this.props['sections'] && this.props['sections'].map(section =>
                    <AppSection {...section} key={section.id} />
                )}
            </div>
        )
    }
}

class AppSection extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <article className={"app-section" + " " + this.props['modifiers']}>
                <div className="container">
                    {this.props['rows'].map(row =>
                        <AppRow {...row} key={row.id} />
                    )}
                </div>
            </article>
        )
    }
}

class AppRow extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className={"row" + " " + this.props['modifiers']}>
                {this.props['columns'].map(column =>
                    <AppColumn {...column} key={column.id} />
                )}
            </div>
        )
    }
}

class AppColumn extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className={"col-md-" + this.props['size'] + " " + this.props['modifiers']}>
                <div className="col-content">
                    {this.props['components'].map(component => {
                        const ComponentName = Components[component['name']];
                        if (ComponentName) {
                            return ( <ComponentName instanceId={component.id} key={component.id} /> )
                        }
                    })}
                </div>
            </div>
        )
    }
}