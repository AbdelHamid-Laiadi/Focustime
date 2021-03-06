import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
            onSubmitEditing={
              ({ nativeEvent}) => {
              setTmpItem
              (nativeEvent.text)
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(tmpItem)
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: 16,
    justifyContent: 'Center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
