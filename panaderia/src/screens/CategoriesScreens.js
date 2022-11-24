import {Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesScreens = ({navigation}) => {
  return (
    <View  style={styles.container}>
      <Text style={styles.fondo}>CategoriesScreens</Text>
      <Button title="Ir a Bread" onPress={() => navigation.navigate("Bread")} />
      
    </View>
  )
}

export default CategoriesScreens;

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: "#FF724C",
      alignItems: "center",
      justifyContent: "center",
    }
})