import {
    FETCH_LANGUAGES_REQUEST,
    FETCH_LANGUAGES_SUCCESS,
    FETCH_LANGUAGES_ERROR,
    CHANGE_LANGUAGE
} from "../../actions/languages/languagesActions";

const initialInstance = {
    languages: [],
    active: '0'
};

export const languagesReducer = (state = initialInstance, action) => {
    switch (action.type) {
        case FETCH_LANGUAGES_REQUEST: {
            const patch = {
                loading: true,
                error: false
            };
            return {
                ...state,
                ...patch
            }
        }
        case FETCH_LANGUAGES_SUCCESS: {
            const patch = {
                loading: false,
                error: false
            };
            return {
                ...state,
                ...action.payload,
                ...patch
            }
        }
        case FETCH_LANGUAGES_ERROR: {
            const patch = {
                loading: false,
                error: action.payload.error
            };
            return {
                ...state,
                ...patch
            }
        }
        case CHANGE_LANGUAGE: {
            console.log('Change language');
            return {
                ...state,
                active: action.payload.id
            }
        }
        default: {
            return state;
        }
    }
};