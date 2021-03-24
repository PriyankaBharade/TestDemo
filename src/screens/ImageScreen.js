import React from "react"
import {View, Text, StyleSheet,FlatList} from 'react-native'
import ImageDetails from '../screens/ImageDetails'

const ImageScreen = () => {
    return(
     <View >
    <ImageDetails title = "Forest" imageSource={require('../../assets/ic_success.png')} score = {9}/> 
    <ImageDetails title = "Forest" imageSource={require('../../assets/ic_success.png')} score = {10}/> 
    <ImageDetails title = "Forest" imageSource={require('../../assets/ic_success.png')} score = {8}/> 
    <ImageDetails title = "Forest" imageSource={require('../../assets/ic_success.png')} score = {7}/> 
    <ImageDetails title = "Forest" imageSource={require('../../assets/ic_success.png')} score = {5}/> 
    </View>
    )
}

const style = StyleSheet.create({

})
export default ImageScreen