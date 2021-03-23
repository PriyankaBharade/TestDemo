import React from 'react';
import {Text,StyleSheet,View,Button,TouchableOpacity} from 'react-native';
const HomeScreen = ({navigation}) => {
    
    return <View>
        <Text style = {styles.textStyle}>Welcom to home page</Text>
        <Button 
        onPress = {() => navigation.navigate('ComponentScreen')}
        title = "Go to component screen"  />

        <Button 
         onPress = {() =>  navigation.navigate('List')}
        title = "Go to List Screen"/>

       <Button 
         onPress = {() =>  navigation.navigate('Image')}
        title = "Go to Image Screen"/>

      <Button 
         onPress = {() =>  navigation.navigate('Counter')}
        title = "Go to Counter Screen"/>

        <Button 
         onPress = {() =>  navigation.navigate('ColorScreen')}
        title = "Go to Color Screen"/>
       
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