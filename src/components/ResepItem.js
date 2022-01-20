import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DefaultText from './DefaultText';

const ResepItem = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.ResepItem}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('RecipeDetail', {
            resepId: props.id,
            categoryName: props.title,
          });
        }}>
        <View>
          <View style={{...styles.rowResep, ...styles.headerResep}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.rowResep, ...styles.detailResep}}>
            <DefaultText style={styles.textResep}>
              {props.duration} menit
            </DefaultText>
            <DefaultText style={styles.textResep}>
              {props.complexity.replace(/^./, str => str.toUpperCase())}
            </DefaultText>
            <DefaultText style={styles.textResep}>
              {props.affordability.replace(/^./, str => str.toUpperCase())}
            </DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ResepItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  bgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  rowResep: {
    flexDirection: 'row',
  },
  headerResep: {
    height: '85%',
  },
  detailResep: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
    backgroundColor: '#ccc',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
});

export default ResepItem;
