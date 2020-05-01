import { INCREMENT_COUNTER } from '../actions/types';
import { DECREMENT_COUNTER } from '../actions/types';

const INITIALE_STATE = {
    counter: 0
}

export default (state = INITIALE_STATE, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state, html: action.payload
            }
        case DECREMENT_COUNTER:
            return {
                counter: state.counter + action.payload
            }
        default:
            return state;
    }
}