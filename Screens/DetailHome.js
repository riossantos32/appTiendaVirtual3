import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function DetailHome() {
    const navigation = useNavigation();
  return (
    <View style={{backgroundColor: "#bb78acff", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DetailHome</Text>
       <Button title='Mas detalles' onPress={()=>navigation.navigate("AnotherDetailsHome")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})