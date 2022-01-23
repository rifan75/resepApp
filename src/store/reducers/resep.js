import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTER} from '../actions/resepAct';

const initialState = {
  resep: MEALS,
  filteredResep: MEALS,
  favoriteResep: [],
};

const resepReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteResep.findIndex(
        resep => resep.id === action.resepId,
      );
      if (existingIndex >= 0) {
        const updateFavoriteResep = [...state.favoriteResep];
        updateFavoriteResep.splice(existingIndex, 1);
        return {...state, favoriteResep: updateFavoriteResep};
      } else {
        const tambahResep = state.resep.find(
          resep => resep.id === action.resepId,
        );
        return {
          ...state,
          favoriteResep: state.favoriteResep.concat(tambahResep),
        };
      }
    case SET_FILTER:
      const appliedFilter = action.filter;
      const resepTerfilter = state.resep.filter(resep => {
        if (appliedFilter.isGlutenFree && !resep.isGlutenFree) {
          return false;
        }
        if (appliedFilter.isVegan && !resep.isVegan) {
          return false;
        }
        if (appliedFilter.isVegetarian && !resep.isVegetarian) {
          return false;
        }
        if (appliedFilter.isLactoseFree && !resep.isLactoseFree) {
          return false;
        }
        return true;
      });
      return {...state, filteredResep: resepTerfilter};
    default:
      return state;
  }
  return state;
};

export default resepReducer;
