import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Focus} from './src/features/focus/focus';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text>Here is where Im going to build a timer</Text>
      ) : (
        <Focus addSubject={setFocusSubject}/>
      )}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#252250'
    
  },
});
