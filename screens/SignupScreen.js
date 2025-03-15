import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Logo */}
      <Text style={styles.logo}>AthLink</Text>

      {/* Slogan */}
      <Text style={styles.slogan}>It starts with a Match™</Text>

      {/* Terms Text */}
      <Text style={styles.termsText}>
        By tapping "Create Account" or "Sign In", you agree to our{' '}
        <Text style={styles.link}>Terms</Text>. Learn how we process your data in our{' '}
        <Text style={styles.link}>Privacy Policy</Text> and{' '}
        <Text style={styles.link}>Cookies Policy</Text>.
      </Text>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate('SignupForm')}
      >
        <Text style={styles.primaryButtonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.secondaryButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Trouble signing in? */}
      <TouchableOpacity>
        <Text style={styles.troubleText}>Trouble signing in?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1128', // Deep Blue
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slogan: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 40,
  },
  termsText: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#FCA311', // Gold
  },
  primaryButton: {
    backgroundColor: '#FCA311', // Gold
    paddingVertical: 15,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  primaryButtonText: {
    color: '#0A1128', // Dark Blue text
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  troubleText: {
    color: '#FFFFFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
