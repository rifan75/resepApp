import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ResepItem from '../components/ResepItem';

const ResepList = props => {
  const renderResepItem = itemData => {
    return (
      <ResepItem
        id={itemData.item.id}
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.reseplist}
        keyExtractor={(item, index) => item.id}
        renderItem={renderResepItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default ResepList;
