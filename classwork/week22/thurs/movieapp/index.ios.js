/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} from 'react-native';

class movieapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Image style={styles.icon} source={require('./popcorn.png')}/>
        <Text style={styles.footer}>
          I'm the footer
        </Text>
      </View>
    );
  }
}

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
  footer: {
    position: 'absolute',
    bottom: 10,
    height: 50,
    // width: this.state.width,
    backgroundColor: 'rgba(76,217,175,1)'
  },
  icon: {
    width:90,
    height: 90,
    position: 'absolute',
    // left: (screenWidth/2 - 45),
    bottom: 5,
  }
});

AppRegistry.registerComponent('movieapp', () => movieapp);
