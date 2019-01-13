import {
    CHANGE_SITE_PAGE
} from "../../actions/site/siteActions";
import {type} from "os";

const initialInstance = {
    "pages": {
        "list": [
            {
                "id": "0",
                "name": "Strona główna",
                "url": "/home"
            },
            {
                "id": "1",
                "name": "Produkty",
                "url": "/stuff"
            },
            {
                "id": "2",
                "name": "Usługi",
                "url": "/services"
            },
            {
                "id": "3",
                "name": "Kontakt",
                "url": "/contact"
            }
        ],
        "active": "0"
    }
};

const newPayloadwithActivePage = (newState, pageId) => {
    if (typeof newState['pages'] !== 'undefined') {
        newState['pages']['active'] = pageId;
    }
    return newState;
};

export const siteReducer = (state = initialInstance, action) => {
    switch (action.type) {
        case CHANGE_SITE_PAGE: {
            return newPayloadwithActivePage({...state}, action.payload.active);
        }
        default: {
            return state;
        }
    }
};