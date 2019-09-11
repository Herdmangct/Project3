import { BARS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/bars";

const initialState = {
  bars: BARS,
  favouriteBars: []
};

const barsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      // will return -1 if the bar is not in the array already
      const existingIndex = state.favouriteBars.findIndex(
        bar => bar.id === action.barId
      );
      // in the array - remove it from favourites
      if (existingIndex >= 0) {
        // keep a store of favourite bars so you don't mutate them directly
        const updatedFavBars = [...state.favouriteBars];
        // remove the bar from favourites list
        updatedFavBars.splice(existingIndex, 1);
        // update the state with the new favourite bars
        return { ...state, favouriteBars: updatedFavBars };
      } else {
        // find the bar you want to add to favourites
        const bar = state.bars.find(bar => bar.id === action.barId);
        // add the bar to the previous states favourites
        return { ...state, favouriteBars: state.favouriteBars.concat(bar) };
      }
    default:
      return state;
  }
};

export default barsReducer;
