/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Alert, TextInput} from 'react-native';

const maxLength = 300;

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        multiline
        maxLength={maxLength}
        onChangeText={text => {
          console.log(text);
          if (text.length > maxLength) {
            Alert.alert(`"${text}" is longer than max length ${maxLength}`);
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 10,
    height: 119,
  },
});

export default App;
