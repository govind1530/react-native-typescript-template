import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import Info from './info';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParamList'
 type Props =  NativeStackScreenProps<RootStackParamList,'Setting'>
const Setting = ({navigation,route}:Props) =>{

   // const navigation = useNavigation<Props>();
    return (
        <View style={{justifyContent:"center",flex:1,alignItems:'center'}}>
            <Text>
                Setting.tsx
            </Text>
            <Info name="mayank" age={23}/>
            
            {/* <TouchableOpacity 
            onPress={()=>navigation.navigate('App3',{userId:6
            })} 
            style={{height:30,width:'90%',backgroundColor:'red'}}>
                <Text>Navigate</Text>
            </TouchableOpacity> */}
            </View>
    )
}

export default Setting;