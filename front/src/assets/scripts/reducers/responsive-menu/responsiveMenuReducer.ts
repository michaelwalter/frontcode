import {
    TOGGLE_OPEN_RESPONSIVE_MENU
} from "../../actions/responsive-menu/responsiveMenuActions";

const initialInstance = {
    isOpen: false
};

const getToggleMenuValue = (value, isOpen) => {
    switch (value) {
        case 'toggle': {
            return !isOpen;
        }
        case 'close': {
            return false;
        }
        case 'open': {
            return true;
        }
        default: {
            return isOpen;
        }
    }
};

export const responsiveMenuReducer = (state = initialInstance, action) => {
    switch (action.type) {
        case TOGGLE_OPEN_RESPONSIVE_MENU: {
            return {
                ...state,
                isOpen: getToggleMenuValue(action.payload, state.isOpen)
            }
        }
        default: {
            return state;
        }
    }
};