import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ResepList from '../components/ResepList';
import DefaultText from '../components/DefaultText';

const FavoriteScreen = props => {
  const favresep = useSelector(state => state.resep.favoriteResep);

  if (favresep.length === 0 || !favresep) {
    return (
      <View style={styles.content}>
        <DefaultText>Tidak ada Resep Favorite</DefaultText>
      </View>
    );
  }

  return <ResepList reseplist={favresep} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoriteScreen;
