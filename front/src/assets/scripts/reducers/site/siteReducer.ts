import {
    CHANGE_SITE_ROUTE
} from "../../actions/site/siteActions";

const initialInstance = {
    "routes": {
        "list": [
            {
                "id": "page-0",
                "name": "Strona główna",
                "value": "/home"
            },
            {
                "id": "page-1",
                "name": "Produkty",
                "value": "/stuff"
            },
            {
                "id": "page-2",
                "name": "Usługi",
                "value": "/services"
            },
            {
                "id": "page-3",
                "name": "Kontakt",
                "value": "/contact"
            }
        ],
        "active": "/home"
    }
};

export const siteReducer = (state = initialInstance, action) => {
    switch (action.type) {
        case CHANGE_SITE_ROUTE: {
            return {
                ...state,
                routes: {
                    ...state.routes,
                    active: action.payload.active
                }
            }
        }
        default: {
            return state;
        }
    }
};