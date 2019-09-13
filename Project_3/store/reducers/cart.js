import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";

const initialState = {
  items: {}, // id, title, price, quantity
  totalAmount: 0 // total price
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedItem = action.item;
      const itemTitle = addedItem.title;
      const itemPrice = addedItem.price;

      let updatedOrNewCartItem;

      if (state.items[addedItem.id]) {
        // already have the item in the cart update it
        updatedOrNewCartItem = new CartItem(
          itemTitle,
          itemPrice,
          state.items[addedItem.id].quantity + 1,
          state.items[addedItem.id].sum + itemPrice
        );
      } else {
        // add a new item to the cart
        updatedOrNewCartItem = new CartItem(itemTitle, itemPrice, 1, itemPrice);
      }
      return {
        ...state,
        // [var] allows you to dynamically create a new key in an object
        items: { ...state.items, [addedItem.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + itemPrice
      };
  }
  return state;
};
