import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native';


export default function App(){
  return(
    <View style={style.container}>
      
      <ScrollView horizontal={true}>
        <View style={style.box1}></View>
        <View style={style.box2}></View>
        <View style={style.box3}></View>
        <View style={style.box4}></View>
        <View style={style.box1}></View>
      </ScrollView>

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
  },
  box1:{
    width: 150,
    height: 250,
    backgroundColor: '#00c3ff'
  },
  box2:{
    width: 150,
    height: 250,
    backgroundColor: '#36ff2f'
  },
  box3:{
    width: 150,
    height: 250,
    backgroundColor: '#f7e121'
  },
  box4:{
    width: 150,
    height: 250,
    backgroundColor: '#e60fee'
  },
});