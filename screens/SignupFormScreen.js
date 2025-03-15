import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SignupFormScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Signup Form Screen</Text>
      {/* You can add your signup form fields here later */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});
