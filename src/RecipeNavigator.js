import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {OverflowMenuProvider} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from './screens/CategoriesScreen';
import RecipeCategoriesScreen from './screens/RecipeCategoriesScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import FilterScreen from './screens/FilterScreen';
import Color from './constans/Colors';

const RecipeNavigator = () => {
  const MainStack = createNativeStackNavigator();
  const HomeStackScreen = () => {
    return (
      <MainStack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#694fad'}}}>
        <MainStack.Screen
          options={{title: 'Resep Kategori', headerTintColor: '#fff'}}
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
  const FavstackScreen = () => {
    return (
      <FavStack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#694fad'}}}>
        <FavStack.Screen
          name="R-Favorite"
          component={FavoriteScreen}
          options={{title: 'Resep Favorite', headerTintColor: '#fff'}}
        />
        <FavStack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      </FavStack.Navigator>
    );
  };

  const Tab =
    Platform.OS === 'android'
      ? createMaterialBottomTabNavigator()
      : createBottomTabNavigator();

  return (
    <NavigationContainer>
      <OverflowMenuProvider>
        <Tab.Navigator
          screenOptions={{headerShown: false}}
          barStyle={{backgroundColor: '#694fad'}}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
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
            component={FavstackScreen}
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
      </OverflowMenuProvider>
    </NavigationContainer>
  );
};

export default RecipeNavigator;
