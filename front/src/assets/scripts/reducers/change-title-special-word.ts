export const changeTitleSpecialWordReducer = (state = '', action) => {
    console.log('REDUCER', state, action);

    switch (action.type) {
        case 'CHANGE_TITLE_SPECIAL_WORD': {
            return (Math.random()).toString();
        }
        default: {
            return state;
        }
    }
};