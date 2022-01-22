import React from 'react';
import {StyleSheet, LogBox} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import RecipeNavigator from './src/RecipeNavigator';
import resepReducer from './src/store/reducers/resep';

const rootReducer = combineReducers({
  resep: resepReducer,
});

const store = createStore(rootReducer);

export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <Provider store={store}>
      <RecipeNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
