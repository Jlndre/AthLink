import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo and Slogan */}
      <Text style={styles.logo}>AthLink</Text>
      <Text style={styles.tagline}>Swipe. Match. Play.</Text>

      {/* Create Account Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Email')}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity 
        style={[styles.button, styles.signInButton]} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={[styles.buttonText, styles.signInButtonText]}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1128',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#FF4F5A',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signInButton: {
    backgroundColor: '#FFF',
  },
  signInButtonText: {
    color: '#FF4F5A',
  },
});
