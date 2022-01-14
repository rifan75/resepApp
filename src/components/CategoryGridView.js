import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CategoryGridView = (props) => {
  const navigation = useNavigation()

  let Touchable = TouchableOpacity
  if (Platform.OS == "android" && Platform.Version >= 21){
    Touchable = TouchableNativeFeedback
  }
	
  return (
    <View style={styles.gridItem}>
      <Touchable
        onPress={() => {navigation.navigate('RecipeCategories',
          {
            categoryId : props.id,
            categoryName : props.title
          })}}
      >
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden"
  },
  container: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    padding: 13,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "right"
  }
})

export default CategoryGridView