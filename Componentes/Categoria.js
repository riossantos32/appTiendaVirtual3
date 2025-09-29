import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Categoria({ nombre, texto }) {
  return (
    <View style={styles.conatainer_text}>
      <FontAwesome5 name={nombre} size={39} color="#000000ff" />
      <Text style={styles.text}>{texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
  text: {
    fontWeight: 'bold',
    color: "#7c7cff"
  },
  conatainer_text: {
    marginRight: 38,
  }

})