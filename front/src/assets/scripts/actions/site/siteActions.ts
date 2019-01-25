export const CHANGE_SITE_ROUTE = 'CHANGE_SITE_ROUTE';

export const changeRoute = (routeValue) => ({
    type: CHANGE_SITE_ROUTE,
    payload: {active: routeValue}
});
