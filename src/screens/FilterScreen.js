import React, {useState, useEffect, useCallback} from 'react';
import {Platform, View, Text, StyleSheet, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useDispatch} from 'react-redux';
import IonicHeaderButton from '../components/IonicHeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constans/Colors';
import {setFilter} from '../store/actions/resepAct';

const FilterSwitch = props => {
  return (
    <View style={styles.container}>
      <DefaultText>{props.label}</DefaultText>
      <Switch
        trackColor={{true: Colors.primaryColor}}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
const FilterScreen = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilter(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Filter',
      headerTintColor: '#fff',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IonicHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IonicHeaderButton}>
          <Item title="Save" iconName="ios-save" onPress={saveFilters} />
        </HeaderButtons>
      ),
    });
  }, [navigation, saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Layar Filter</Text>
      <FilterSwitch
        label="Gluten - Free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose - Free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});

export default FilterScreen;
