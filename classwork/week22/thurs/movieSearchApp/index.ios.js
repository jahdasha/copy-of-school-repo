/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Importing React.
import React, { Component } from 'react';
// Importing all of the components we are using.
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

// Creating our main component.
class MovieSearchApp extends Component {
  // The contents of the render function will be displayed on the page when the component loads.
  render() {
    return (
      /*<View>s are like the React-Native equivalent of <div>s in HTML.*/
      /*To apply a style to a view or any element you create a style object then reference it inline.*/
      <View>
        <Text >
          Welcome to The Class!
        </Text>
        <Text >
          There we will add something else
        </Text>
        <Text >
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('MovieSearchApp', () => MovieSearchApp);
