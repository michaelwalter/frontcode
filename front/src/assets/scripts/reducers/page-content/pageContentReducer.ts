import {
    FETCH_PAGE_CONTENT_REQUEST,
    FETCH_PAGE_CONTENT_SUCCESS,
    FETCH_PAGE_CONTENT_ERROR
} from "../../actions/page-content/pageContentActions";

const initialInstance = {
    sections: [],
    id: 'page-0'
};

export const pageContentReducer = (state = initialInstance, action) => {
    switch (action.type) {
        case FETCH_PAGE_CONTENT_REQUEST: {
            const patch = {
                loading: true,
                error: false
            };
            return {
                ...state,
                ...patch
            }
        }
        case FETCH_PAGE_CONTENT_SUCCESS: {
            const patch = {
                loading: false,
                error: false
            };
            return {
                ...state,
                ...action.payload,
                ...patch
            };
        }
        case FETCH_PAGE_CONTENT_ERROR: {
            const patch = {
                loading: false,
                error: action.payload.error
            };
            return {
                ...state,
                ...patch
            }
        }
        default: {
            return state;
        }
    }
};