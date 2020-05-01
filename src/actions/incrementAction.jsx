import axios from "axios"
import { INCREMENT_COUNTER } from './types';
import { DECREMENT_COUNTER } from './types'


export const onIncrement = () => async dispatch => {
    try {
        let data = await axios.get('http://webcode.me');
        dispatch({
            type: INCREMENT_COUNTER,
            payload: data.data
        })
    }
    catch (err) { console.log(err) }
}
    export const onDecrement = () => dispatch => {
        dispatch({
            type: DECREMENT_COUNTER,
            payload: -1
        })
    }