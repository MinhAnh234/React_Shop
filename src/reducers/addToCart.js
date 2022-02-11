import {ADD_TO_CART} from "../const/index";



const addToCartReducers = (state = [],action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            state=[action.payload];
            return state;
        default:
            return state;
    }
  
}
export default addToCartReducers;

