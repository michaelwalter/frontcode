import { combineReducers } from "redux";
import { languagesReducer } from "./languages/languagesReducer";
import { pageContentReducer } from "./page-content/pageContentReducer";
import { responsiveMenuReducer } from "./responsive-menu/responsiveMenuReducer";
import {siteReducer} from "./site/siteReducer";

export default combineReducers({
    languages: languagesReducer,
    pageContent: pageContentReducer,
    responsiveMenu: responsiveMenuReducer,
    site: siteReducer
});