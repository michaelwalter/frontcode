import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../actions";

interface ComponentProps {
    languages: Array<any>
    active: string
    onMounted: any
    onChangeLanguageClick: any
}

class LanguageSelectorContainer extends React.Component<ComponentProps> {
    componentDidMount(): void {
        this.props.onMounted();
    }

    onChangeLanguage(languageId): void {
        this.props.onChangeLanguageClick(languageId);
    }

    render () {
        return <LanguageSelector languages={this.props.languages} active={this.props.active} onChangeLanguage={this.onChangeLanguage.bind(this)} />
    }
}

const LanguageSelector = props => {
    const isActive = item => {
        return item.id === props.active;
    };
    const toggleActiveClass = item => {
        return isActive(item) ? ' current ' : '';
    };
    const isEnabled = item => {
        return item.enabled;
    };
    const toggleEnabledClass = item => {
        return isEnabled(item) ? '' : ' app-languages__language--disabled ';
    };
    const changeLanguageClick = language => {
        return function (event) {
            event.preventDefault();
            if (!isActive(language) && isEnabled(language)) {
                props.onChangeLanguage(language.id);
            }
            return false;
        };
    };
    const languagesItems = props.languages.map((language, index) => (
        <li className={'app-languages__language' + toggleActiveClass(language) + toggleEnabledClass(language)} key={index}>
            <button className="app-languages__language-link" onClick={changeLanguageClick(language)}>
                {language.type}
            </button>
        </li>
    ));
    return (
        <ul className="app-languages">
            {languagesItems}
        </ul>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.languages
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onMounted: () => {
            dispatch(actions.languages.asyncActions.fetchLanguagesWithRedux());
        },
        onChangeLanguageClick: (languageId) => {
            dispatch(actions.languages.changeLanguage(languageId));
        }
    }
};

export const Languages = connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguageSelectorContainer);