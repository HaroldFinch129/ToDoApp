import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from './ToDoInput.style';
const ToDoInput = () => {
  const [toDoList, setToDoList] = useState(0);

  function addToDo() {
    setToDoList(toDoList + 1);
  }

  function deleteToDo() {
    setToDoList(toDoList - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.toDoBar}>
        <Text style={styles.bar}>ToDos:</Text>
        <Text style={styles.bar}> {toDoList}</Text>

      </View>
      
    <View style={styles.button}>
        <Button title="ADD" onPress={addToDo}></Button>
        <Button title="DELETE" onPress={deleteToDo}></Button>

    </View>
    </View>
  );
};

export default ToDoInput;
