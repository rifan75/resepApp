import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

const FilterScreen = props => {
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.title}>Layar Filter</Text>
      </View>
      <View style={styles.container}>
        <Text>Gluten Free</Text>
        <Switch />
      </View>
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
