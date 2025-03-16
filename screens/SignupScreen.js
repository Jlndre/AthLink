import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignupScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#0A1128', '#1EA364']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

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
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 80,
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor: '#FFFFFF', // White button on green background looks clean
    width: '100%',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#1EA364', // Green text on white button
    fontSize: 18,
    fontWeight: '600',
  },
  signInButton: {
    backgroundColor: '#1EA364', // Inverted for the second button
  },
  signInButtonText: {
    color: '#FFFFFF', // White text on green background
  },
});
