import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/Profile'
import HomeStack from './HomeStack';
import AboutScreen from '../Screens/AboutScreen'



export function TabNavigator() {
    const Tab = createBottomTabNavigator()
  return (
        <Tab.Navigator>
           <Tab.Screen name='Profile' component={Profile}/>
           <Tab.Screen  component={HomeStack}/>
           <Tab.Screen name='AboutScreen' component={AboutScreen}/>
        </Tab.Navigator>
   )
}