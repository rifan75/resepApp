import React from 'react';
import {FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ResepItem from '../components/ResepItem';
import {MEALS} from '../data/dummy-data';

const RecipeCategoriesScreen = () => {
  const route = useRoute();
  const {categoryId} = route.params;

  const renderResepItem = itemData => {
    return (
      <ResepItem
        id={itemData.item.id}
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };

  const resepTerpilih = MEALS.filter(
    resep => resep.categoryId.indexOf(categoryId) >= 0,
  );
  return (
    <FlatList
      data={resepTerpilih}
      keyExtractor={(item, index) => item.id}
      renderItem={renderResepItem}
      style={{width: '100%'}}
    />
  );
};

export default RecipeCategoriesScreen;
