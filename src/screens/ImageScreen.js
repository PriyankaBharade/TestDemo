import React from "react"
import {View, Text, StyleSheet } from 'react-native'
import ImageDetails from '../screens/ImageDetails'

const ImageScreen = () => {
return <View> 
    <ImageDetails title = "Forest" imageSource={require('../../assets/ic_success.png')}/> 
    <ImageDetails title = "Forest" imageSource={require('../../assets/ic_success.png')}/> 
    <ImageDetails title = "Forest" imageSource={require('../../assets/ic_success.png')}/> 
    <ImageDetails title = "Forest" imageSource={require('../../assets/ic_success.png')}/> 
    <ImageDetails title = "Forest" imageSource={require('../../assets/ic_success.png')}/> 
</View>
}

const style = StyleSheet.create({

})
export default ImageScreen