import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CATEGORIES } from '../data/dummy-data'

const RecipeCategoriesScreen = props =>{
    const navigation = useNavigation()
    // const route = useRoute()
    // const { categoryId } = route.params
    // const cateroryTerpilih = CATEGORIES.find(cat => cat.id === categoryId)
    return (
        <View style={styles.screen}>
            <Text>Layar Kategori Resep</Text>
            {/* <Text>{cateroryTerpilih.title}</Text> */}
            <Button title="Ke Detail Resep" onPress={() => {
                navigation.navigate('RecipeDetail')
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default RecipeCategoriesScreen