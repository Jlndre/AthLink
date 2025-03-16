import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function FirstNameScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { email } = route.params || {}; // Coming from EmailScreen ✅

  const [firstName, setFirstName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleNext = () => {
    if (firstName.trim() === '') {
      alert('Please enter your first name');
      return;
    }
    setModalVisible(true);
  };

  const handleModalNext = () => {
    setModalVisible(false);

    // Navigate to GenderScreen and pass email + firstName ✅
    navigation.navigate('GenderScreen', { email, firstName });
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

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>What's your first name?</Text>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor="#999"
        />

        <Text style={styles.subText}>
          This is how it’ll appear on your profile.{' '}
          <Text style={styles.boldText}>Can’t change it later.</Text>
        </Text>
      </View>

      {/* Next Button */}
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleNext}>
          <LinearGradient
            colors={['#FF416C', '#FF4B2B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
          >
            <Text style={styles.nextText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Welcome Modal */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.emoji}>👋</Text>
            <Text style={styles.modalTitle}>Welcome, {firstName}!</Text>
            <Text style={styles.modalText}>
              There’s a lot out there to discover. But let’s get your profile set up first.
            </Text>

            <TouchableOpacity
              style={styles.modalButtonWrapper}
              onPress={handleModalNext}
            >
              <LinearGradient
                colors={['#FF416C', '#FF4B2B']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Let’s go</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.editName}>Edit name</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    width: '40%', // This shows 40% progress on the bar
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 60, // Reduced the space to align better with the email screen
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 40,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    paddingVertical: 10,
    marginBottom: 10,
    color: '#333',
  },
  subText: {
    color: '#666',
    fontSize: 14,
    marginTop: 5,
  },
  boldText: {
    fontWeight: '700',
    color: '#333',
  },
  nextButtonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  buttonWrapper: {
    width: '100%',
  },
  gradientButton: {
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  modalButtonWrapper: {
    width: '100%',
    marginBottom: 10,
  },
  modalButton: {
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editName: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
