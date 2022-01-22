import {MEALS} from '../../data/dummy-data';

const initialState = {
  resep: MEALS,
  filteredResep: MEALS,
  favoriteResep: [],
};

const resepReducer = (state = initialState, action) => {
  return state;
};

export default resepReducer;
