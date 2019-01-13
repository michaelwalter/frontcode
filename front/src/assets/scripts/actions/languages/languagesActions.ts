import { Mocks } from '../../utils/mocks';

export const FETCH_LANGUAGES_REQUEST = 'FETCH_LANGUAGES_REQUEST';
export const FETCH_LANGUAGES_SUCCESS = 'FETCH_LANGUAGES_SUCCESS';
export const FETCH_LANGUAGES_ERROR = 'FETCH_LANGUAGES_ERROR';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

const fetchLanguagesWithRedux = () => {
    return dispatch => {
        dispatch(fetchLanguagesRequest());
        return fetchLanguages()
            .then(json => {
                dispatch(fetchLanguagesSuccess(json));
            })
            .catch( error => {
                dispatch(fetchLanguagesError(error));
            });
    };
};

const fetchLanguages = () => {
    return new Promise( resolve => {
        resolve({...Mocks['languages']});
    });
};

const fetchLanguagesRequest = () => ({
    type: FETCH_LANGUAGES_REQUEST
});

const fetchLanguagesSuccess = (payload) => ({
    type: FETCH_LANGUAGES_SUCCESS,
    payload: { ...payload }
});

const fetchLanguagesError = (error) => ({
    type: FETCH_LANGUAGES_ERROR,
    payload: { ...error }
});

export const asyncLanguagesActions = {
    fetchLanguagesWithRedux: fetchLanguagesWithRedux
};

export const changeLanguage = (languageId) => ({
    type: CHANGE_LANGUAGE,
    payload: { id: languageId }
});
