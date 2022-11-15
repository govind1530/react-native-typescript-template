import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//immport all auth screens
import {LoginScreen} from "@screens"

const AuthStack = createNativeStackNavigator();

export const AuthNavigator = () =>{
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen component={LoginScreen} name="Login"/>
        </AuthStack.Navigator>
    )
}