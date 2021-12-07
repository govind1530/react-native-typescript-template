import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {DrawerStackList} from './DrawerStackList'
 type Props =  NativeStackScreenProps<DrawerStackList,'DrawerScreen'>
const DrawerScreen = ({navigation,route}:Props) =>{
    return (
        <View style={{justifyContent:"center",flex:1,alignItems:'center'}}>
            <Text>
                DrawerScreen.tsx
            </Text>
                        
            </View>
    )
}

export default DrawerScreen;