import React from "react"
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetails = props => {
    return <View>
        <Text>{props.title}</Text>
        <Image source ={props.imageSource}/>
        <Text>{props.score}</Text>
    </View>
}

const style = StyleSheet.create({
})

export default ImageDetails