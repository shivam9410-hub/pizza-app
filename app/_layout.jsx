
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import Profile from '../Screens/Profile'
// import HomeStack from './HomeStack';
import AboutScreen from '../Screens/AboutScreen'
import HomeStack from '../Navigation/HomeStack'
const RootLayout = () => {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer independent={true}>
      {/* <TabNavigation/> */}
      <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeStack}/>
           <Tab.Screen name='Profile' component={Profile}/>
         
           <Tab.Screen name='AboutScreen' component={AboutScreen}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootLayout

