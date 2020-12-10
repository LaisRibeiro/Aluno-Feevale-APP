import React from 'react';
import { StyleSheet } from 'react-native';
// import { AsyncStorage } from 'react-native-community/async-storage'

import { NavigationContainer } from '@react-navigation/native';

import Menu from './src/navigations/DrawerNavigator';

export default function App() {

  return (
      <NavigationContainer>
        <Menu/> 
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato"
  }
});

// TODO: Add página de login e depois páginas de navegação.