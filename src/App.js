import React from "react";
import {View,Text, StyleSheet} from 'react-native';
import Headline from "./components/Headline";

const App = () => {
  return(
    <View style={styles.container}>
      <Headline/>
      

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
