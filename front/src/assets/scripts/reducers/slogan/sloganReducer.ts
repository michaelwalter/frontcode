import {
    FETCH_SLOGAN_REQUEST,
    FETCH_SLOGAN_SUCCESS,
    FETCH_SLOGAN_ERROR,
    CHANGE_SLOGAN_SPECIAL_WORD
} from "../../actions/slogan/sloganActions";

interface ComponentState {
    title: string
    description: string
    specialWords: Array<string>
    url: string
    titleTemplate: string,
    error: any
    loading: Boolean
}

const initialInstanceState: ComponentState = {
    "title": "Frontcode",
    "description": "Lorem ipsum dolor sit amet",
    "specialWords": ["rzeczywistość", "jakość"],
    "url": "http://frontcode.pl",
    "titleTemplate": "Tworzymy nową <br/> <strong>${specialWord}</strong> <br/> od podstaw",
    "error": true,
    "loading": true
};

const updateSlogansState = (newState, patch, payload) => {
    let instanceState = newState[payload.id];
    if (!instanceState) {
        newState[payload.id]  = {...initialInstanceState, ...payload, ...patch};
    } else {
        newState[payload.id] = {...newState[payload.id], ...payload, ...patch};
    }
    return newState;
};

export const sloganReducer = (state = [], action) => {
    const newState = {...state};
    switch (action.type) {
        case FETCH_SLOGAN_REQUEST: {
            const patch = {
                loading: true,
                error: false
            };
            return updateSlogansState(newState, patch, action.payload);
        }
        case FETCH_SLOGAN_SUCCESS: {
            const patch = {
                loading: false,
                error: false
            };
            return updateSlogansState(newState, patch, action.payload);
        }
        case FETCH_SLOGAN_ERROR: {
            const patch = {
                loading: false,
                error: action.payload.error
            };
            return updateSlogansState(newState, patch, {});
        }
        case CHANGE_SLOGAN_SPECIAL_WORD: {
            const patch = {
                title: "Lorem ipsum dolor sit amet"
            };
            return updateSlogansState(newState, patch, action.payload);
        }
        default: {
            return state;
        }
    }
};