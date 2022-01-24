import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import ResepList from '../components/ResepList';
import DefaultText from '../components/DefaultText';

const RecipeCategoriesScreen = () => {
  const route = useRoute();
  const {categoryId} = route.params;

  const resepTersedia = useSelector(state => state.resep.filteredResep);

  const resepTerpilih = resepTersedia.filter(
    resep => resep.categoryId.indexOf(categoryId) >= 0,
  );

  if (resepTerpilih.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>Data tidak ada!!!</DefaultText>
        <DefaultText>Mohon di cek di filter</DefaultText>
      </View>
    );
  }
  return <ResepList reseplist={resepTerpilih} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default RecipeCategoriesScreen;
