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
















enum OverlayStatus {
    open = 'is-open',
    closed = 'is-closed',
    loading = 'is-loading'
}


interface OverlayProps {
    status: string
}

interface OverlayState {
    status: string
}

export class AppOverlay extends React.Component<OverlayProps, OverlayState> {
    private path = [];
    private duration = 500;
    private timeStart = Date.now();
    private isOpened = false;
    private spinner: HTMLElement;
    readonly spinnerRef: any;
    readonly pathsRef: any;

    constructor (props) {
        super(props);
        this.state = {
            status: this.props.status
        };
        this.pathsRef = React.createRef();
        this.spinnerRef = React.createRef();
    }

    componentDidUpdate(prevProps: Readonly<OverlayProps>, prevState: Readonly<OverlayState>, snapshot?: any): void {
        if (prevProps.status !== this.props.status) {
            if (this.props.status === OverlayStatus.open) {
                this.open();
            }
            if (this.props.status === OverlayStatus.closed) {
                this.close();
            }
            if (this.props.status === OverlayStatus.loading) {
                this.showSpinner();
            }
        }
    }

    componentDidMount(): void {
        this.path = this.pathsRef.current.childNodes;
        this.spinner = this.spinnerRef.current;
    }

    hideSpinner (): void {
        this.spinner.style.display = 'none';
    }

    showSpinner (): void {
        this.spinner.style.display = 'block';
    }

    open() {
        this.isOpened = true;
        this.hideSpinner();
        this.path[0].setAttribute('cx', 0);
        this.path[0].setAttribute('cy', 0);
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
        this.hideSpinner();
        this.path[0].setAttribute('cx', 350);
        this.path[0].setAttribute('cy', 250);
        this.renderLoop();
        setTimeout(() => {
            this.setState({
                status: this.props.status
            });
        }, 500);
    }

    renderFrame() {
        if (this.isOpened) {
            const newSize = Date.now() - this.timeStart;
            this.path[0].setAttribute('r', newSize >= 0 ? newSize : 0);
        } else {
            const newSize = this.duration - (Date.now() - this.timeStart);
            this.path[0].setAttribute('r', newSize >= 0 ? newSize : 0);
        }
    }
    renderLoop() {
        this.renderFrame();
        if (Date.now() - this.timeStart < this.duration) {
            requestAnimationFrame(() => {
                this.renderLoop();
            });
        }
    }

    render () {
        return (
            <div className="app-overlay">
                <svg className={"shape-overlays " + this.state.status} ref={this.pathsRef} viewBox="0 0 250 250" preserveAspectRatio="none">
                    <circle cx="0" cy="0" r="0" className="shape-overlays__path"/>
                </svg>
                <svg className={"shape-overlays-loader"} version="1.1" ref={this.spinnerRef} x="0px" y="0px"
                     width="40px" height="40px" viewBox="0 0 50 50">
                    <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                        <animateTransform attributeType="xml"
                                          attributeName="transform"
                                          type="rotate"
                                          from="0 25 25"
                                          to="360 25 25"
                                          dur="0.6s"
                                          repeatCount="indefinite"/>
                    </path>
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
            overlayStatus: OverlayStatus.closed
        }
    }

    componentWillUpdate(nextProps: Readonly<ComponentProps>, nextState: Readonly<ComponentState>, nextContext: any): void {
        const runOverlayLoadingAnimation = () => {
            setTimeout( () => {
                this.setState({
                    pageStatus: 'loaded',
                    overlayStatus: OverlayStatus.closed
                });
                window.scrollTo(0, 0);
            }, 500);
        };

        const runOverlayOpenAnimation = () => {
            setTimeout(() => {
                this.setState({
                    pageStatus: 'loading',
                    overlayStatus: OverlayStatus.loading
                }, () => {
                    this.updateCurrentId(nextProps.routes.active, runOverlayLoadingAnimation);
                });
            }, 300);
        };

        if (nextProps.routes.active !== this.props.routes.active) {
            this.setState({
                pageStatus: 'out',
                overlayStatus: OverlayStatus.open
            }, () => {
                runOverlayOpenAnimation();
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