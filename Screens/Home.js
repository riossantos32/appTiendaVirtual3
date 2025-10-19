import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor: "#8829d6ff", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home Screen</Text>
            <Button title='Go Details' onPress={()=>navigation.navigate("DetailHome")}></Button>
        </View>
    )
}

const styles = StyleSheet.create({})