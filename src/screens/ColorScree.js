import React ,{ useState } from 'react'
import {View,Button, FlatList, StyleSheet} from 'react-native'

const ColorScreen = () => {
    const [color,setColors] = useState([])
    console.log(color)
    return (
    <View>
        <Button title = 'Add a Color'
        onPress ={ () => {
            setColors([...color,randomeRgb()])
        }}/>
        
        <FlatList
        data ={color}
        renderItem={({item}) =>{
           return <View style ={{height: 100 , width : 100 , backgroundColor : item}}/>
        }}
        />
    </View>
    );
};

const randomeRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    return `rgb(${red},${blue},${green})`;
}

export default ColorScreen