import { Mocks } from '../../utils/mocks';

export const FETCH_SLOGAN_REQUEST = 'FETCH_SLOGAN_REQUEST';
export const FETCH_SLOGAN_SUCCESS = 'FETCH_SLOGAN_SUCCESS';
export const FETCH_SLOGAN_ERROR = 'FETCH_SLOGAN_ERROR';
export const CHANGE_SLOGAN_SPECIAL_WORD = 'CHANGE_TITLE_SPECIAL_WORD';

const fetchSloganWithRedux = (instanceId) => {
    return dispatch => {
        dispatch(fetchSloganRequest(instanceId));
        return fetchSlogan(instanceId)
            .then(json => {
                dispatch(fetchSloganSuccess(json, instanceId));
            })
            .catch( error => {
                dispatch(fetchSloganError(error, instanceId));
            });
    };
};

const fetchSlogan = (instanceId) => {
    return new Promise( resolve => {
        resolve({...Mocks[instanceId]});
    });
};

const fetchSloganRequest = (instanceId) => ({
    type: FETCH_SLOGAN_REQUEST,
    payload: { id: instanceId }
});

const fetchSloganSuccess = (payload, instanceId) => ({
    type: FETCH_SLOGAN_SUCCESS,
    payload: { ...payload, id: instanceId }
});

const fetchSloganError = (error, instanceId) => ({
    type: FETCH_SLOGAN_ERROR,
    payload: { ...error, id: instanceId }
});

export const asyncActions = {
    fetchSloganWithRedux: fetchSloganWithRedux
};

export const changeSloganSpecialWord = (instanceId) => ({
    type: CHANGE_SLOGAN_SPECIAL_WORD,
    payload: { id: instanceId }
});
