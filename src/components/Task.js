import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Task = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Task;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 7,
    width: Dimensions.get('window').width,
    backgroundColor: 'palegreen',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width / 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'limegreen',
  },
});
