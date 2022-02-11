import {ADD_TO_CART} from '../const/index'

export const actAddToCart = (payload) => {
    const action = {
        type: ADD_TO_CART,
            payload
      };
        return action;
}