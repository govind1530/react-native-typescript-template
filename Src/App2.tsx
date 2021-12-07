import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import Info from './info';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParamList'
 type Props =  NativeStackScreenProps<RootStackParamList,'App2'>
const App2 = ({navigation,route}:Props) =>{

   // const navigation = useNavigation<Props>();
    return (
        <View style={{justifyContent:"center",flex:1,alignItems:'center'}}>
            <Text>
                App2.tsx
            </Text>
            <Info name="govind" age={23}/>
            
            <TouchableOpacity 
            onPress={()=>navigation.navigate('App3',{userId:6
            })} 
            style={{height:30,width:'90%',backgroundColor:'red'}}>
                <Text>Navigate</Text>
            </TouchableOpacity>
            </View>
    )
}

export default App2;