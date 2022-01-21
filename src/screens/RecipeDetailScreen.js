import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MEALS} from '../data/dummy-data';
import IonicHeaderButton from '../components/IonicHeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};
const RecipeDetailScreen = ({route, navigation}) => {
  const {resepId, categoryName} = route.params;

  const selectedResep = MEALS.find(resep => resep.id === resepId);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryName,
      headerTintColor: '#fff',
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
    <ScrollView>
      <Image source={{uri: selectedResep.imageUrl}} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText>{selectedResep.duration} menit</DefaultText>
        <DefaultText>
          {selectedResep.complexity.replace(/^./, str => str.toUpperCase())}
        </DefaultText>
        <DefaultText>
          {selectedResep.affordability.replace(/^./, str => str.toUpperCase())}
        </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedResep.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedResep.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  detail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default RecipeDetailScreen;
