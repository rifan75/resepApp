import React from 'react';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import ResepList from '../components/ResepList';

const RecipeCategoriesScreen = () => {
  const route = useRoute();
  const {categoryId} = route.params;

  const resepTersedia = useSelector(state => state.resep.filteredResep);

  const resepTerpilih = resepTersedia.filter(
    resep => resep.categoryId.indexOf(categoryId) >= 0,
  );
  return <ResepList reseplist={resepTerpilih} />;
};

export default RecipeCategoriesScreen;
