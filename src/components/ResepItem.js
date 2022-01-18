import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
            <Text style={styles.textResep}>{props.duration} menit</Text>
            <Text style={styles.textResep}>
              {props.complexity.replace(/^./, str => str.toUpperCase())}
            </Text>
            <Text style={styles.textResep}>
              {props.affordability.replace(/^./, str => str.toUpperCase())}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ResepItem: {
    height: 200,
    width: '95%',
    backgroundColor: '#f5f5f5',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
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
  textResep: {
    color: 'black',
    fontSize: 15,
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
