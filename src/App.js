import React from "react";
import {View,Text, StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}> ToDoApp</Text>
    </View>
  )
};

export default App;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'wheat',
    flex:1,
  },
  text:{
    color:'firebrick',
    fontSize:25,
    fontWeight:'bold',
  },
})
