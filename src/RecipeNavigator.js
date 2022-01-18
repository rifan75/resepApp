import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {OverflowMenuProvider} from 'react-navigation-header-buttons';
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
        screenOptions={{headerStyle: {backgroundColor: Color.accentColor}}}>
        <MainStack.Screen
          options={{title: 'Resep Kategori'}}
          name="Categories"
          component={CategoriesScreen}
        />
        <MainStack.Screen
          options={({route}) => ({title: route.params.categoryName})}
          name="RecipeCategories"
          component={RecipeCategoriesScreen}
        />
        <MainStack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      </MainStack.Navigator>
    );
  };

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <OverflowMenuProvider>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Favorite" component={FavoriteScreen} />
          <Tab.Screen name="Filter" component={FilterScreen} />
        </Tab.Navigator>
      </OverflowMenuProvider>
    </NavigationContainer>
  );
};

export default RecipeNavigator;
