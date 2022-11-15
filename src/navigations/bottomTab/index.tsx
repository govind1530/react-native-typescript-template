import React from 'react';
import {} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginScreen} from '../../screens/index';
import {LoginScreen as Login} from '../../screens/index';
import BottomTabBar from  './ui'
const BottomTabs = createBottomTabNavigator();

const BottomNavigator = () => {
  const tabs = [
    {
      name: 'home',
      label: 'home',
      component: LoginScreen,
    },
    {
      name: 'setting',
      label: 'setting',
      component: Login,
    },
  ];

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <BottomTabBar {...props}/>}
      >
      {/* <BottomTabs.Screen
      name="Home" component={LoginScreen} />
      <BottomTabs.Screen name="Home2" component={Login} /> */}
      {tabs.map((_, index) => {
        return (
          <BottomTabs.Screen
            key={index}
            name={_.name}
            component={_.component}
            options={{
              tabBarLabel: _.label,
            }}
          />
        );
      })}
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
