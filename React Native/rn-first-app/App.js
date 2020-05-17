import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [outputText, setOutputText] = useState('IDK!')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title = "Change Text" onPress = {() => setOutputText('The text changes again!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
