/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ButtonComponent from './component/button';
export default class TapTheNumber extends Component {
  constructor(props) {
    super(props);
    styleButton = {
      color: "#fff",
      backgroundColor: "#0eff"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.gameName}>
            Tap the Number
        </Text>
        <Text style={styles.highScore}>
          High Score
        </Text>
        <Text style={styles.highScore}>
          70
        </Text>
          <ButtonComponent name="Tap To Play" stylesButton={styleButton} >

          </ButtonComponent>
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
  gameName: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,

  },

  highScore: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 35 ,
  },
});

AppRegistry.registerComponent('TapTheNumber', () => TapTheNumber);
