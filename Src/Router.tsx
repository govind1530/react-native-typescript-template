import React from 'react';
import {NavigationContainer,DrawerNavigationState} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {RootStackParamList} from './RootStackParamList';
import {MainBottomTabList} from './MainBottomTabList';
import {DrawerStackList} from './DrawerStackList'
import {createDrawerNavigator,DrawerContentComponentProps} from '@react-navigation/drawer'
import App2 from './App2';
import App3 from './App3';
import Home from './Home';
import Setting from './Setting';
import DrawerScreen from './DrawerScreen'
const  Stack = createStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootStackParamList>()
const DrawerTab = createDrawerNavigator<DrawerStackList>()

type Props =DrawerNavigationState<DrawerStackList>
const DrawerTabNavigator = () =>{
    return(
        
             <DrawerTab.Navigator
             screenOptions={{
        drawerStyle: {
          width: '90%',
        },
      }}
      drawerContent ={props=> <DrawerScreen {...props}/>} 
      >
                 {/* <DrawerTab.Screen  name="DrawerScreen" component={DrawerScreen} /> */}
                 <DrawerTab.Screen  name="Home" component={BottomTabNavigator} />
             </DrawerTab.Navigator>
           
              
    )
}

const BottomTabNavigator = () =>{
    return (
//  <NavigationContainer>
        <BottomTab.Navigator 
        //initialRouteName="Home"
        >
            {/* <BottomTab.Screen options={{headerShown:false}} name='Home' component={Router} /> */}
             <BottomTab.Screen options={{headerShown:false}} name='Home' component={Home} />
            <BottomTab.Screen options={{headerShown:false}} name='Setting' component={Setting} />
            {/* <BottomTab.Screen name='DrawerScreen' component={DrawerTabNavigator }/> */}
        </BottomTab.Navigator>
        //   </NavigationContainer>
        
        
    )
}

const Router = () =>{
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName="DrawerScreen">
            {/* <Stack.Screen options={{headerShown:false}} name='Home' component={BottomTabNavigator}/> */}
            <Stack.Screen name='App2' component={App2}/>
            <Stack.Screen name='App3' component={App3}/>
            <Stack.Screen name="DrawerScreen" component={DrawerTabNavigator}/>
            </Stack.Navigator>
            </NavigationContainer>
    )
}

export default Router

