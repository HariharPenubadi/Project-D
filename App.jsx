import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.con}>
      <Text style={styles.text}>1oB Inc.</Text>
      <Text style={styles.text}>Project D</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  con:{
    justifyContent:'center',
    alignItems:'center',
    height:"100%",
  },
  text:{
    fontSize:50
  }
})
