import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const CategoryBreadScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>CategoryBreadScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  )
}

export default CategoryBreadScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF7",
    alignItems: "center",
    justifyContent: "center",
  }
})