import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MEALS} from '../data/dummy-data';
import IonicHeaderButton from '../components/IonicHeaderButton';
import DefaultText from '../components/DefaultText';

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
      <Image />
      <View style={{...styles.rowResep, ...styles.detailResep}}>
        <DefaultText style={styles.textResep}>
          {props.duration} menit
        </DefaultText>
        <DefaultText style={styles.textResep}>
          {props.complexity.replace(/^./, str => str.toUpperCase())}
        </DefaultText>
        <DefaultText style={styles.textResep}>
          {props.affordability.replace(/^./, str => str.toUpperCase())}
        </DefaultText>
      </View>
      <View style={styles.screen}>
        <Text>{selectedResep.title}</Text>
      </View>
    </ScrollView>
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
