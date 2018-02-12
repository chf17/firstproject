import React, { Component } from 'react';
import {  Button,  StyleSheet,  Text,  View,} from 'react-native';

console.log("components counter.js");
export default class Counter extends Component {


  render() {
    console.log("render components Counter.js");
    return (
      <View>
        <Button
        title="Up"
        onPress={this.props.increment}
       />
        <Text
        style={styles.counter}
        onPress={this.props.reset}
        >
        {this.props.count}
        </Text>
        <Button
        title="Down"
         onPress={this.props.decrement}
        />             
     
      
        </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});