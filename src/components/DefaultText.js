import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DefaultText = props => {
  return <Text style={styles.textResep}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  textResep: {
    color: 'black',
    fontSize: 15,
  },
});

export default DefaultText;
