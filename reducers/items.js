// import Redux constants
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

// in reducer, state always needs to be equal to something, so we set the default value to an empty array since our posts will be an array
// state will always be posts since we're in a posts reducer so we name it post

export default (items = [], action) => {
    switch (action.type) {

        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...items, action.payload];
        case UPDATE:
            return items.map((item) => (item._id === action.payload._id ? action.payload : item))
        case DELETE:
            return items.filter(item => item._id !== action.payload)
        default:
            return items;
    }
}