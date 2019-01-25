import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { store} from "./store";
import { Provider } from "react-redux";
import { connect } from "react-redux";

import {AppHeader} from "./layouts/default/app-header/app-header";
import {AppFooter} from "./layouts/default/app-footer/app-footer";
import {Page} from "./layouts/default/page";
import {ResponsiveMenu} from "./components/responsive-menu/responsive-menu";
import {actions} from "./actions";

const container = document.getElementById("app");




















const ease = {
    exponentialIn: (t) => {
        return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
    },
    exponentialOut: (t) => {
        return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
    },
    exponentialInOut: (t) => {
        return t == 0.0 || t == 1.0
            ? t
            : t < 0.5
                ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
                : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0;
    },
    sineOut: (t) => {
        const HALF_PI = 1.5707963267948966;
        return Math.sin(t * HALF_PI);
    },
    circularInOut: (t) => {
        return t < 0.5
            ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
            : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
    },
    cubicIn: (t) => {
        return t * t * t;
    },
    cubicOut: (t) => {
        const f = t - 1.0;
        return f * f * f + 1.0;
    },
    cubicInOut: (t) => {
        return t < 0.5
            ? 4.0 * t * t * t
            : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
    },
    quadraticOut: (t) => {
        return -t * (t - 2.0);
    },
    quarticOut: (t) => {
        return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
    },
};

interface OverlayProps {
    status: string
}

interface OverlayState {
    status: string
}

export class AppOverlay extends React.Component<OverlayProps, OverlayState> {
    private path = [];
    private numPoints = 2;
    private duration = 300;
    private delayPointsArray = [];
    private delayPointsMax = 0;
    private delayPerPath = 50;
    private timeStart = Date.now();
    private isOpened = false;
    private isAnimating = false;

    private pathsRef: any;

    constructor (props) {
        super(props);
        this.state = {
            status: ""
        };
        this.pathsRef = React.createRef();
    }

    componentDidUpdate(nextProps: Readonly<OverlayProps>, nextContext: any): void {
        if (nextProps.status !== this.props.status) {
            this.toggle();
        }
    }

    componentDidMount(): void {
        this.path = this.pathsRef.current.childNodes;
    }

    toggle() {
        this.isAnimating = true;
        for (var i = 0; i < this.numPoints; i++) {
            this.delayPointsArray[i] = 0;
        }
        if (this.isOpened === false) {
            this.open();
        } else {
            this.close();
        }
    }
    open() {
        this.isOpened = true;
        this.setState({
            status: this.props.status
        }, () => {
            this.timeStart = Date.now();
            this.renderLoop();
        });
    }
    close() {
        this.isOpened = false;
        this.timeStart = Date.now();
        this.renderLoop();
        setTimeout(() => {
            this.setState({
                status: this.props.status
            });
        }, 500);

    }
    updatePath(time) {
        const points = [];
        for (var i = 0; i < this.numPoints; i++) {
            const thisEase = this.isOpened ?
                (i == 1) ? ease.cubicOut : ease.cubicInOut:
                (i == 1) ? ease.cubicInOut : ease.cubicOut;
            points[i] = thisEase(Math.min(Math.max(time - this.delayPointsArray[i], 0) / this.duration, 1)) * 100
        }

        let str = '';
        str += (this.isOpened) ? `M 0 0 V ${points[0]} ` : `M 0 ${points[0]} `;
        for (var i = 0; i < this.numPoints - 1; i++) {
            const p = (i + 1) / (this.numPoints - 1) * 100;
            const cp = p - (1 / (this.numPoints - 1) * 100) / 2;
            str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
        }
        str += (this.isOpened) ? `V 0 H 0` : `V 100 H 0`;
        return str;
    }
    renderFrame() {
        if (this.isOpened) {
            for (var i = 0; i < this.path.length; i++) {
                this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * i)));
            }
        } else {
            for (var i = 0; i < this.path.length; i++) {
                this.path[i].setAttribute('d', this.updatePath(Date.now() - (this.timeStart + this.delayPerPath * (this.path.length - i - 1))));
            }
        }
    }
    renderLoop() {
        this.renderFrame();
        if (Date.now() - this.timeStart < this.duration + this.delayPerPath * (this.path.length - 1) + this.delayPointsMax) {
            requestAnimationFrame(() => {
                this.renderLoop();
            });
        }
        else {
            this.isAnimating = false;
        }
    }

    render () {
        return (
            <div className="app-overlay">
                <svg className={"shape-overlays " + this.state.status} ref={this.pathsRef} viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path className="shape-overlays__path"/>
                </svg>
            </div>
        );
    }
}
















interface ComponentProps {
    routes: {
        list: Array<any>
        active: string
    }
    onChangeRouteClick: any
    location: any
    history: any
}

interface ComponentState {
    currentRouteId: string
    pageStatus: string
    overlayStatus: string
}

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <AppContainer />
            </BrowserRouter>
        );
    }
}

export class AppContent extends React.Component<ComponentProps, ComponentState> {
    constructor (props) {
        super (props);
        this.state = {
            currentRouteId: this.getCurrentRouteId(this.props.routes.active),
            pageStatus: 'loaded',
            overlayStatus: 'is-closed'
        }
    }

    componentWillUpdate(nextProps: Readonly<ComponentProps>, nextState: Readonly<ComponentState>, nextContext: any): void {
        if (nextProps.routes.active !== this.props.routes.active) {
            this.setState({
                pageStatus: 'out',
                overlayStatus: 'is-open'
            }, () => {
                setTimeout(() => {
                    this.setState({
                        pageStatus: 'loading'
                    });
                    this.updateCurrentId(nextProps.routes.active, () => {
                        setTimeout( () => {
                            this.setState({
                                pageStatus: 'loaded',
                                overlayStatus: 'is-closed'
                            });
                            window.scrollTo(0, 0);
                        }, 200);
                    });
                }, 300);
            });
        }
    }

    componentDidMount(): void {
        this.props.history.listen((location, action) => {
            this.props.onChangeRouteClick(location.pathname);
        });
    }

    getCurrentRouteId (newRouteValue): string {
        let routeId = '';
        this.props.routes.list.forEach( (route, id) => {
            if (route.value === newRouteValue) {
                routeId = route.id;
            }
        });
        return routeId;
    }

    updateCurrentId (newRouteValue, callback): void {
        this.setState((prevState, props) => {
            return {
                currentRouteId: this.getCurrentRouteId(newRouteValue)
            }
        }, callback);
    }

    render () {
        return (
            <div className={"app-wrapper " + this.state.pageStatus }>
                <AppHeader />
                <ResponsiveMenu />
                <main className="app-main">
                    <Page routeId={this.state.currentRouteId} />
                </main>
                <AppFooter />
                <AppOverlay status={this.state.overlayStatus} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.site
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChangeRouteClick: (routeValue, callback) => {
            dispatch(actions.site.changeRoute(routeValue));
            dispatch(actions.responsiveMenu.toggleOpen('close'));
        }
    }
};

export const AppContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContent));

if (container) {
    ReactDOM.render(
        (
            <Provider store={store}>
                <App />
            </Provider>
        ),
        container
    );
}