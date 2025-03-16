import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#0A1128', '#FCA311']}
      style={styles.gradientContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar barStyle="light-content" />

      {/* Single Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Feather name="arrow-left" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Logo */}
      <Text style={styles.logo}>AthLink</Text>

      {/* Terms and Policies */}
      <Text style={styles.termsText}>
        By tapping "Sign In", you agree to our{' '}
        <Text style={styles.link}>Terms</Text>. Learn how we process your data in our{' '}
        <Text style={styles.link}>Privacy Policy</Text> and{' '}
        <Text style={styles.link}>Cookies Policy</Text>.
      </Text>

      {/* Sign In Buttons */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="logo-apple" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Sign in with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <FontAwesome name="google-" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="chatbubble" size={24} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Sign in with Phone Number</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.troubleText}>Trouble Signing In?</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60, // Space for safe area
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 10,
    padding: 10,
  },
  logo: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 100, // Adjust to your liking
    marginBottom: 30,
  },
  termsText: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 30,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#FFFFFF',
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
  troubleText: {
    color: '#FFFFFF',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 20,
    textAlign: 'center',
  },
});
