import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function EmailScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email.trim() === '') {
      alert('Please enter your email');
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    navigation.navigate('FirstNameScreen', { email });
  };
  

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <LinearGradient
          colors={['#FF5F6D', '#FFC371']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.progressBar}
        />
      </View>

      {/* Only ONE back button - Optional */}
      {/* You can remove this entire TouchableOpacity if you don't want a back button */}
      {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={28} color="#333" />
      </TouchableOpacity> */}

      <View style={styles.content}>
        <Text style={styles.heading}>What's your email?</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.subtext}>This is how we’ll contact you. Can’t change it later.</Text>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <LinearGradient
          colors={['#FF5F6D', '#FFC371']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.nextText}>Next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#eee',
    width: '100%',
  },
  progressBar: {
    height: 4,
    width: '20%', // Email screen progress
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,  // Move content higher up
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 40,  // Gives space between heading and input
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    paddingVertical: 10,
    marginBottom: 10,
  },
  subtext: {
    color: '#666',
    fontSize: 14,
    marginTop: 5,
  },
  nextButton: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  gradientButton: {
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
