import React from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CATEGORIES } from '../data/dummy-data'


const CategoriesScreen = props =>{
	const navigation = useNavigation()
	const renderGridItem = (itemData) =>{
		return (
			<TouchableOpacity
				style={styles.gridItem}
				onPress={() => {navigation.navigate('RecipeCategories',
					{
						categoryId : itemData.item.id,
						categoryName : itemData.item.title
					})}}
			>
				<View>
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
		)
	}
	return (
		<FlatList 
			keyExtractor={(item, index) => item.id}	
			data={CATEGORIES} 
			renderItem={renderGridItem} 
			numColumns={2}
		/>
	)
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
		gridItem: {
			flex: 1,
			margin: 15,
			height: 150
		}
})

export default CategoriesScreen