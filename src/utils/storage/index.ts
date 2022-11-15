import AsyncStorage  from '@react-native-async-storage/async-storage'
import { Log } from '../log'
// import { Log } from '@utils'

export const storeDataInAsyncStorage = async (key:string,value:any) =>{
    try {
            await AsyncStorage.setItem(`@${key}`,value)
    } catch (error) {
           Log("storeDataInAsyncStorage error",error)
    }
}

export const getDataFromAsyncStorage = async (key:string) =>{
    try {
            await AsyncStorage.getItem(`@${key}`)
    } catch (error) {
        Log("getDataFromAsyncStorage err",error)
    }
}

