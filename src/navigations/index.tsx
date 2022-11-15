//main navigation files
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomNavigator from './bottomTab/index';
const MainStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* {
                    if user sign in
                    ?

                    :
                    if user sign out
                } */}
               
               <MainStack.Screen name='Bottom' component={BottomNavigator}/>
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
