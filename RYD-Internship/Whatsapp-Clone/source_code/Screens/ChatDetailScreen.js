import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ChatDetailScreen = props => {
  return (
    <View style={styles.container}>
      <Text>This is the Chat Details!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default ChatDetailScreen;