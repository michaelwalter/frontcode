import { Mocks } from '../../utils/mocks';

export const TOGGLE_OPEN_RESPONSIVE_MENU = 'TOGGLE_OPEN_RESPONSIVE_MENU';

export const toggleOpen = (value?: string) => ({
    type: TOGGLE_OPEN_RESPONSIVE_MENU,
    payload: (value || 'toggle')
});
