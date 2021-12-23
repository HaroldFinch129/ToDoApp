import React, {useState} from "react";
import {View, Text, StyleSheet, Flatlist} from 'react-native';
import ToDoInput from "./components/ToDo/ToDoInput";




const App = () => {
  // const [list, setList] = useState( [
    
  //   {text:'Take a shower', key: '1' },
  //   {text:'have a breakfeast', key: '2' }, 
  //   {text:'check your mails', key: '3' },

  // ]);
  // const renderList = ({item}) => <Text list={item}/>
  return (
    <View style={styles.container}>
      <View style={styles.headline_container}>
      <Text style={styles.headline}>ToDoApp</Text>
      {/* <Flatlist
      data={list}
      renderItem={renderList}
      // keyExtrator={item => item.key.toString()}
    /> */}

      </View>
    <ToDoInput/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'wheat',
  },
  headline:{
    color:'darkblue',
    fontSize:40,
    fontWeight:'bold',
    
  },
  headline_container:{
    alignItems:'center',
    backgroundColor:'cornsilk',
    
  },
})

