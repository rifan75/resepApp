import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MEALS} from '../data/dummy-data';
import IonicHeaderButton from '../components/IonicHeaderButton';

const RecipeDetailScreen = ({route, navigation}) => {
  const {resepId, categoryName} = route.params;

  const selectedResep = MEALS.find(resep => resep.id === resepId);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: categoryName,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IonicHeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log('Mark as Favorite');
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>{selectedResep.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipeDetailScreen;
