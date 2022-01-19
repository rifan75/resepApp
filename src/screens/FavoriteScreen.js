import React from 'react';
import ResepList from '../components/ResepList';
import {MEALS} from '../data/dummy-data';

const FavoriteScreen = props => {
  const favresep = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <ResepList reseplist={favresep} />;
};

export default FavoriteScreen;
