import React from 'react';
import {StyleSheet, LogBox} from 'react-native';
import RecipeNavigator from './src/RecipeNavigator';

export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  return <RecipeNavigator />;
}

const styles = StyleSheet.create({});
