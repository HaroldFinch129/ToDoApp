import React from "react";
import {View, Text, StyleSheet, Flatlist} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>ToDoApp</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'wheat',
    alignItems:'center',
  },
  headline:{
    color:'blue',
    fontSize:20,
    fontWeight:'bold',

  },
})

