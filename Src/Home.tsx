import React, { useState } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

import Info from './info';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from './RootStackParamList'
 type Props =  NativeStackScreenProps<RootStackParamList,'Home'>
const Home = ({navigation,route}:Props) =>{

    
    const [value,setValue] = useState<number>(0)
    const [minus,setMinus] = useState<number>(0)
   // const navigation = useNavigation<Props>();

   const doCalucaltion  = (action:string) =>{
        
        if(action === 'plus'){
setValue(value+1)
        }else{
            value > 0?setValue(value-1):setValue(0)

        }

   }
    return (
        <View style={{justifyContent:"center",flex:1,alignItems:'center'}}>
            <Text>
                Home.tsx
            </Text>
            <Info name="govind" age={23}/>

            <TouchableOpacity 
            onPress={()=>navigation.navigate('App2')} 
            style={{height:30,width:'90%',backgroundColor:'red'}}>
                <Text>Navigate</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row',justifyContent:'center',margin:10}}>
                <TouchableOpacity 
                onPress={()=>doCalucaltion('plus')}
                style={{height:30,width:'30%',backgroundColor:'yellow'}}>
                    <Text>plus</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 onPress={()=>doCalucaltion('minus')}
                style={{height:30,width:'30%',backgroundColor:'blue'}}>
                    <Text>minus</Text>
                </TouchableOpacity>

                <Text>{value <= 0 ?0:value}</Text>
            </View>
            </View>
    )
}

export default Home;