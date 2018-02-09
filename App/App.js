import React, { Component } from 'react';
import {  Platform,  StyleSheet,  Text,  View} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './store';
import CounterContainer from './containers/CounterContainer.js';

//import TimerMixin from 'react-timer-mixin';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    console.log("render");
    return (      
      <Provider store={store}>    
        <View style={styles.container}>        
        <Text style={styles.welcome}>
           Welcome François Application
           {'\n'}New Technologie
        </Text>
        <CounterContainer/>           
        </View>
      </Provider>
    );
  }
}

//type Props = {};
//export default class App extends Component<Props> {
  /*
export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome François Application
          {'\n'}New Technologie
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
