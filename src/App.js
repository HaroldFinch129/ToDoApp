import React from "react";
import {View,Text, StyleSheet} from 'react-native';
import Headline from "./components/Headline";
import Task from "./components/Task";

const App = () => {
  return(
    <View style={styles.container}>
      <Headline/>
      <Task/>
      

    </View>
  )
};

export default App;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'wheat',
    flex:1,
  },
 
});
