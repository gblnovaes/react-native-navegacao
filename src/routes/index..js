 
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Sobre from '../pages/Sobre'
import { Contato } from '../pages/Contato'
import StackRoutes from './stack.routes';

 
export default function Routes(){
  const Tab = createBottomTabNavigator()
  return (
 
      <Tab.Navigator 
      screenOptions={ ({route}) => (
        {
          tabBarIcon:({
            focused,color,size
          }) =>{
            let iconName
            if(route.name === 'Home'){
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
            }else if(route.name === 'Sobre'){
              iconName = focused?'ios-list' : 'ios-list-outline'
            }else if(route.name === 'Contato'){
              iconName = focused?'ios-list' : 'ios-list'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarShowLabel:false,
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#7899cc',
          tabBarStyle:{
            backgroundColor: '#202225',
            borderTopWidth:0
          }
        }
      ) }>
        <Tab.Screen name="HomeStack" component={StackRoutes} options={{ tabBarBadge: 6, headerShown:false
 }}  />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Contato" component={Contato} options={{
          headerShown:false
        }} />
      </Tab.Navigator>
   
  )
}

 