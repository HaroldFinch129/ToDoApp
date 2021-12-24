import React from 'react';
import {View, Text, FlatList, StyleSheet,Dimensions} from 'react-native';

var list = [
  {text: 'Kahve satın alacağım', key: '1'},
  {text: 'Bir uygulama yapacağım', key: '2'},
  {text: 'Kitap yazacağım', key: '3'},
];
const TaskList = () => {
  return (
    <View>
      <FlatList style={styles.list}
        data={list}
        renderItem={data => <Text style={styles.listItem}>{data.item.text}</Text>}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
    list:{
    //    alignItems:'center',
    },
    listItem:{
        margin:10,
        marginLeft:35,
        backgroundColor:'lightskyblue',
        borderRadius:5,
        color:'maroon',
        width: Dimensions.get('window').width / 1.25,
        justifyContent:'center',
        textAlign:'center',
        height:30,
        fontWeight:'bold',

    },
}) 
