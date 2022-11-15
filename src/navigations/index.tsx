//main navigation files
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const MainStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStack.Navigator>
          {/* {
                    if user sign in
                    ?

                    :
                    if user sign out
                } */}
        </MainStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
