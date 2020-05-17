import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style = {{padding: 50}}>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder = "Enter your goal"
        style = {{width: '80%', borderColor: 'black', borderWidth: 1, padding: 10}}
        />
        <Button title = "ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App()
{
  return (
    <View style = {{padding: 50, flexDirection: 'row', width: '80%', height: 300, justifyContent: 'space-between', alignItems: 'center'}}>
      <View
        style = 
        {{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style = 
        {{
          backgroundColor: 'blue',
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style = 
        {{
          backgroundColor: 'green',
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
