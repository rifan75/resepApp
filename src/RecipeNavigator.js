import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen'
import FavoriteScreen from './screens/FavoriteScreen'
import RecipeCategoriesScreen from './screens/RecipeCategoriesScreen'
import RecipeDetailScreen from './screens/RecipeDetailScreen'
import Color from './constans/Colors'


const Stack = createNativeStackNavigator()

const RecipeNavigator = () =>{
	return(
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{headerStyle: {backgroundColor: '#f4511e',}}}
			>
				<Stack.Screen 
					options={{ title: 'Resep Kategori'}}
					name="Categories" 
					component={CategoriesScreen} />
				<Stack.Screen 
					name="Favorite" 
					component={FavoriteScreen} />
				<Stack.Screen 
					options= {({route}) => ({title: route.params.categoryName})}
					name="RecipeCategories" 
					component={RecipeCategoriesScreen} />
				<Stack.Screen 
					name="RecipeDetail" 
					component={RecipeDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default RecipeNavigator