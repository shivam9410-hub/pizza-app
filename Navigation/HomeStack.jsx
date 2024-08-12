import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen'
const HomeStack = () => {
    const Stack =  createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' component={HomeScreen} options={{title:"Classic Pizza"}}/>
  </Stack.Navigator>
   
  )
}

export default HomeStack