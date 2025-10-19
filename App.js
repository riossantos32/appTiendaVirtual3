import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Navegacion from './Navegacion';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
        <Navegacion />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});