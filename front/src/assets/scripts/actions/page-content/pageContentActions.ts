import { Mocks } from '../../utils/mocks';

export const FETCH_PAGE_CONTENT_REQUEST = 'FETCH_PAGE_CONTENT_REQUEST';
export const FETCH_PAGE_CONTENT_SUCCESS = 'FETCH_PAGE_CONTENT_SUCCESS';
export const FETCH_PAGE_CONTENT_ERROR = 'FETCH_PAGE_CONTENT_ERROR';

const fetchPageContentWithRedux = (routeId) => {
    return dispatch => {
        dispatch(fetchPageContentRequest());
        return fetchPageContent(routeId)
            .then(json => {
                setTimeout(() => {
                    dispatch(fetchPageContentSuccess(json));
                }, 0);
            })
            .catch( error => {
                dispatch(fetchPageContentError(error));
            });
    };
};

const fetchPageContent = (routeId) => {
    return new Promise( resolve => {
        resolve({...Mocks[routeId]});
    });
};

const fetchPageContentRequest = () => ({
    type: FETCH_PAGE_CONTENT_REQUEST
});

const fetchPageContentSuccess = (payload) => ({
    type: FETCH_PAGE_CONTENT_SUCCESS,
    payload: { ...payload }
});

const fetchPageContentError = (error) => ({
    type: FETCH_PAGE_CONTENT_ERROR,
    payload: { ...error }
});

export const asyncPageContentActions = {
    fetchPageContentWithRedux: fetchPageContentWithRedux
};
