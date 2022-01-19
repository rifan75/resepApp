import React from 'react';
import {useRoute} from '@react-navigation/native';
import {MEALS} from '../data/dummy-data';
import ResepList from '../components/ResepList';

const RecipeCategoriesScreen = () => {
  const route = useRoute();
  const {categoryId} = route.params;

  const resepTerpilih = MEALS.filter(
    resep => resep.categoryId.indexOf(categoryId) >= 0,
  );
  return <ResepList reseplist={resepTerpilih} />;
};

export default RecipeCategoriesScreen;
