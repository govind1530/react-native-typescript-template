import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParamList'
 type Props =  NativeStackScreenProps<RootStackParamList,'App3'>
const App3 = ({navigation,route}:Props) =>{
    console.log("Props",'------',route?.params?.userId)
    return (
        <View style={{justifyContent:"center",flex:1,alignItems:'center'}}>
            <Text>
                App3.tsx
            </Text>
            <TouchableOpacity 
            onPress={()=>navigation.goBack()} 
            style={{height:30,width:'90%',backgroundColor:'blue'}}>
                <Text>go back</Text>
            </TouchableOpacity>
            </View>
    )
}

export default App3;