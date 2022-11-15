import React from 'react';
import {View,Text,Pressable,StyleSheet,Dimensions} from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const {width,height}  = Dimensions.get("screen");

const TAB_BAR_WIDTH = width/2;
const ANIMATED_PART_HEIGHT = 5;

const BottomTabBar = ({state,descriptors,navigation }:any) =>{

    const animationHorizontalValue = useSharedValue(0);

    const horizontalAnimation = (index:number) =>{
        animationHorizontalValue.value = withSpring(index * TAB_BAR_WIDTH)
    }

    const horizontalAnimationStyle  = useAnimatedStyle(()=>{
        return{
            transform:[{translateX:animationHorizontalValue.value}]
        }
    })

    React.useEffect(()=>{
            horizontalAnimation(state.index)
    },[state.index])

    return (
        <View style={styles.container}>
              

                    <View style={{flexDirection:"row"}}>
                            {
                                state.routes.map((route:any,index:any)=>{
                                        const {options} = descriptors[route.key];
                                        const label = options.tabBarLabel  || route.name
                                        const isFocused = state.index === index

                                        const onPress = () =>{
                                            const event = navigation.emit({
                                                type:"tabPress",
                                                target:route.key,
                                                canPreventDefault:true,
                                            })
                                            if(!isFocused && !event.defaultPrevented){
                                                navigation.navigate(route.name)
                                            }
                                        }

                                        const onLongPress = () =>{
                                            navigation.emit({
                                                type:"tabLongPress",
                                                target:route.key
                                            })
                                        }
                                                
                                        return (
                                            <Pressable
                                            onPress={onPress}
                                            onLongPress={onLongPress}
                                            testID={options.tabBarTestID}
                                            style={styles.tabButton}
                                            key={`${index}--${route.key}`}
                                            accessibilityState={isFocused?{selected:true}:{}}
                                            accessibilityLabel={options.tabBarAccessibilityLabel}
                                            >
                                                <View style={styles.innverView}>
                                                    <Text style={{color:"#000"}}>{label}</Text>
                                                </View>
                                            </Pressable>
                                        )
                                })
                            }
                    </View>

                    <Animated.View style={styles.animatedWrapper}>
                            <Animated.View
                                style={[styles.animatedView,horizontalAnimationStyle]}
                            />
                </Animated.View>
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        borderTopColor:"grey",
        borderTopWidth:3,
        backgroundColor:"#ffffff"
    },
    tabButton:{
        flex:1
    },
    innverView:{
        paddingVertical:height * 0.01,
        justifyContent:"center",
        alignItems:"center"
    },
    iconText:{
        width:TAB_BAR_WIDTH,
        textAlign:"center"
    },
    animatedView:{
        width:TAB_BAR_WIDTH,
        height:ANIMATED_PART_HEIGHT,
        backgroundColor:"#000"
    },
    animatedWrapper:{
        width:TAB_BAR_WIDTH,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default BottomTabBar


