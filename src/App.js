import React from "react";
import {View,Text, StyleSheet} from 'react-native';
import Headline from "./components/Headline";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

const App = () => {
  return(
    <View style={styles.container}>
      <Headline/>
      <Task/>
      <TaskList/>
      

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
