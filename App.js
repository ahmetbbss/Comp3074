import {View, Text, StyleSheet, Button, Switch} from 'react-native';
import React, { useState } from 'react';
import {TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import About from './About';
import Main from './Main';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [page , setPage] = useState(false);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Main} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}