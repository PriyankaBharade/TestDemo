import React from 'react'
import {View,Button,StyleSheet} from 'react-native'

const ColorScreen = () => {
    return <View >
        <Button title = 'Add a Color'
        onPress ={ () => {}}/>

        <View style ={{height: 100 , width : 100 , backgroundColor :randomeRgb()}}/>
    </View>

}

const randomeRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    return 'rgb(${red}  ,${green} ,${blue})';
}

export default ColorScreen