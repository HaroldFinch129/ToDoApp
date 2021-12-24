import React from "react";
import {View,Text, StyleSheet} from 'react-native';

const Headline = () => {
    return(
        <View style={styles.headline_container}>
        <Text style={styles.headline}> ToDoApp</Text>
        </View>
    )
};

export default Headline;


const styles = StyleSheet.create({
    headline:{
        color:'firebrick',
        fontSize:30,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10,
      },
      headline_container:{
        backgroundColor:'lightyellow',
        alignItems:'center',
    
      },
});
