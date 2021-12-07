import React from 'react';
import {View,Text} from 'react-native';

interface props{
    name:string,
    age:number
}

const Info:React.FC<props>= ({name,age}) =>{
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text>{name}</Text>
                <Text>{age}</Text>
        </View>
    )
}

export default Info