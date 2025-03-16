import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Slider from '@react-native-community/slider'; // Ensure installed!

export default function DistancePreferenceScreen() {
  const navigation = useNavigation();
  const [distance, setDistance] = useState(10); // Default distance in miles

  const handleNext = () => {
    console.log(`Selected distance: ${distance} miles`);

    // You can save distance to Firebase later
    // saveDistanceToFirebase(distance);

    navigation.navigate('LocationPermissionScreen', {email, firstName, gender, birthday: date, selectedSports, expertise, distance}); // ✅ navigate to UploadProfilePhotoScreen
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBarBackground}>
        <LinearGradient
          colors={['#FF416C', '#FF4B2B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.progressBarFill}
        />
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Your distance preference?</Text>

        <Text style={styles.subText}>
          Use the slider to set the maximum distance you want your potential matches to be located.
        </Text>

        <View style={styles.sliderContainer}>
          <Text style={styles.label}>Distance Preference</Text>
          <Text style={styles.distanceValue}>{distance} mi</Text>
        </View>

        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={100}
          step={1}
          minimumTrackTintColor="#FF416C"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#FF416C"
          value={distance}
          onValueChange={(value) => setDistance(value)}
        />
      </View>

      {/* Bottom Note */}
      <Text style={styles.bottomNote}>You can change preferences later in Settings</Text>

      {/* Next Button */}
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity onPress={handleNext} style={styles.buttonWrapper}>
          <LinearGradient
            colors={['#FF416C', '#FF4B2B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
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
    width: '100%',
  },
  progressBarFill: {
    width: '90%', // Adjusted for ~90% progress
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  subText: {
    color: '#666',
    fontSize: 14,
    marginBottom: 40,
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  distanceValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  bottomNote: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  nextButtonContainer: {
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
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
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
