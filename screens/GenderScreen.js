import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function GenderScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { email, firstName } = route.params || {};

  const [selectedGender, setSelectedGender] = useState('');
  const [showOnProfile, setShowOnProfile] = useState(false);

  const handleNext = () => {
    if (!selectedGender) {
      alert('Please select a gender');
      return;
    }

    navigation.navigate('BirthdayScreen', {
      email,
      firstName,
      gender: selectedGender,
      showOnProfile,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Progress Bar */}
      <View style={styles.progressBarBackground}>
        <LinearGradient
          colors={['#1EA364', '#1EA364']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.progressBarFill}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>What's your gender?</Text>

        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGender === 'Woman' && styles.genderButtonSelected,
          ]}
          onPress={() => setSelectedGender('Woman')}
        >
          <Text
            style={[
              styles.genderButtonText,
              selectedGender === 'Woman' && styles.genderButtonTextSelected,
            ]}
          >
            Woman
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGender === 'Man' && styles.genderButtonSelected,
          ]}
          onPress={() => setSelectedGender('Man')}
        >
          <Text
            style={[
              styles.genderButtonText,
              selectedGender === 'Man' && styles.genderButtonTextSelected,
            ]}
          >
            Man
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setShowOnProfile(!showOnProfile)}
        >
          {showOnProfile ? (
            <Feather name="check-square" size={24} color="#1EA364" />
          ) : (
            <Feather name="square" size={24} color="#ccc" />
          )}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Show my gender on my profile</Text>
      </View>

      <View style={styles.nextButtonContainer}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleNext}>
          <LinearGradient
            colors={['#1EA364', '#1EA364']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: '#eee',
  },
  progressBarFill: {
    width: '30%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0A1128',
    marginBottom: 40,
  },
  genderButton: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    alignItems: 'center',
  },
  genderButtonSelected: {
    borderColor: '#1EA364',
  },
  genderButtonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  genderButtonTextSelected: {
    color: '#1EA364',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  nextButtonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  buttonWrapper: {
    width: '100%',
  },
  button: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
