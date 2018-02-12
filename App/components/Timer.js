import React, { Component } from 'react';
import {  Button,  StyleSheet,  Text,  View,} from 'react-native';

console.log("components timer.js");
export default class Timer extends Component {


  render() {
    console.log("render components Timer.js");
    return (
      <View>        
        <Text
        style={styles.buttontimer}
        title="Start Timer"
         onPress={this.props.starttimer}
        >
        {"Start\nTimer"}
        </Text>

        <Text
        style={styles.timer}
        >
        {this.props.countertimer}
        </Text>
        
        <Text
        style={styles.buttontimer}
        title="Stop Timer"
         onPress={this.props.stoptimer}
        >       
        {"Stop\nTimer"}
        </Text>
      
        </View>
    );
  }
}


const styles = StyleSheet.create({
  buttontimer: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:80,
    height:80,
    padding:20,
    //backgroundColor:'#fff',
    borderRadius:40,   
  }, 
  timer: {

    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    },
});