import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const RecipeDetailScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>Layar Detail Resep</Text>
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

export default RecipeDetailScreen