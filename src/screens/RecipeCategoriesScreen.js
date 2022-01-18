import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import ResepItem from '../components/ResepItem';
import {MEALS} from '../data/dummy-data';

const RecipeCategoriesScreen = props => {
  const navigation = useNavigation();
  const route = useRoute();
  const {categoryId} = route.params;

  const renderResepItem = itemData => {
    return (
      <ResepItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectResep={() => {}}
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipeCategoriesScreen;
