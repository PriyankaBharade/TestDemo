import React from 'react';
import {Text,StyleSheet,View,Button,TouchableOpacity} from 'react-native';
const HomeScreen = () => {
    return <View>
        <Text style = {styles.textStyle}>Welcom to home page</Text>
        <Button 
        onPress = {() => console.log('Button Pressed')}
        title = "Go to component screen"
        />
        <TouchableOpacity onPress = {() => console.log('Pressed on touchable opacity')}>
            <Text>Go to List Screen</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
        textStyle : {
            fontSize : 14,
            color : '#120000'
        },
        marginStyle:{
            marginVertical : 10
        }
    }
)
export default HomeScreen;