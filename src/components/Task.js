import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native';

const Task = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Add Task</Text>
      </TouchableOpacity>
    <View>
        <TextInput style={styles.task} placeholder='Add Task...'/>

    </View>
    </View>

  );
};
export default Task;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width,
    backgroundColor: 'palegreen',
    alignItems: 'center',
    
    
  },
  button: {
    backgroundColor: 'green',
    width: Dimensions.get('window').width / 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    borderWidth:1,
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
    task:{
        height:40,
        width: Dimensions.get('window').width / 1.5,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth:1,
        

    },


  
});
