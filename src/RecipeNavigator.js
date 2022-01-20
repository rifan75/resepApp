import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  OverflowMenuProvider,
  HeaderButtons,
  Item,
} from 'react-navigation-header-buttons';
import IonicHeaderButton from './components/IonicHeaderButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from './screens/CategoriesScreen';
import RecipeCategoriesScreen from './screens/RecipeCategoriesScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import FilterScreen from './screens/FilterScreen';
import Color from './constans/Colors';

const RecipeNavigator = () => {
  const MainStack = createNativeStackNavigator();
  const MainStackNavigator = () => {
    return (
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#694fad'},
        }}>
        <MainStack.Screen
          options={({navigation}) => ({
            title: 'Resep Kategori',
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
          })}
          name="Categories"
          component={CategoriesScreen}
        />
        <MainStack.Screen
          options={({route}) => ({
            title: route.params.categoryName,
            headerTintColor: '#fff',
          })}
          name="RecipeCategories"
          component={RecipeCategoriesScreen}
        />
        <MainStack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      </MainStack.Navigator>
    );
  };

  const FavStack = createNativeStackNavigator();
  const FavstackNavigator = () => {
    return (
      <FavStack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#694fad'}}}>
        <FavStack.Screen
          name="R-Favorite"
          component={FavoriteScreen}
          options={({navigation}) => ({
            title: 'Resep Favorite',
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
          })}
        />
        <FavStack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      </FavStack.Navigator>
    );
  };

  const Tab =
    Platform.OS === 'android'
      ? createMaterialBottomTabNavigator()
      : createBottomTabNavigator();

  const ResepTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen
          name="Home"
          component={MainStackNavigator}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="home"
                size={25}
                color={focused ? Color.accentColor : 'white'}
              />
            ),
            // tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavstackNavigator}
          options={{
            tabBarLabel: 'Favorite',
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="ios-star"
                size={25}
                color={focused ? Color.accentColor : 'white'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const FilterStack = createNativeStackNavigator();
  const FilterStackScreen = () => {
    return (
      <FilterStack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#694fad'}}}>
        <FilterStack.Screen
          name="Filter-Screen"
          component={FilterScreen}
          options={({navigation}) => ({
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
          })}
        />
      </FilterStack.Navigator>
    );
  };

  const Drawer = createDrawerNavigator();
  const DrawerStackNavigator = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Resep-Draw"
          component={ResepTabNavigator}
          options={{
            headerShown: false,
            title: 'Resep',
            drawerActiveTintColor: Color.accentColor,
          }}
        />
        <Drawer.Screen
          name="Filter"
          component={FilterStackScreen}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <OverflowMenuProvider>
        <DrawerStackNavigator />
      </OverflowMenuProvider>
    </NavigationContainer>
  );
};

export default RecipeNavigator;
