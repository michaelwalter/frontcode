import { Mocks } from '../../utils/mocks';

export const CHANGE_SITE_PAGE = 'CHANGE_SITE_PAGE';

export const changePage = (pageId) => ({
    type: CHANGE_SITE_PAGE,
    payload: {active: pageId}
});
