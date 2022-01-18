import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridView from '../components/CategoryGridView';

const CategoriesScreen = () => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridView
        id={itemData.item.id}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
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

export default CategoriesScreen;
