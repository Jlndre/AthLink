import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function LocationPermissionScreen() {
  const navigation = useNavigation();

  const handleAllowLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Location Access Denied',
          'We need your location to show players nearby. Please enable it in settings.'
        );
        return;
      }

      // ✅ At this point, location access is granted
      let location = await Location.getCurrentPositionAsync({});
      console.log('User location:', location);

      // Navigate to the next screen after location is allowed
      navigation.navigate('HomeScreen'); // <-- Replace with your actual next screen
    } catch (error) {
      console.log('Location error:', error);
      Alert.alert('An error occurred while fetching location');
    }
  };

  const handleInfoPress = () => {
    Alert.alert(
      'How is my location used?',
      'Your location helps AthLink match you with sports partners nearby. Your exact location is never shared publicly.'
    );
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

      <View style={styles.content}>
        <Text style={styles.title}>So, are you from around here?</Text>
        <Text style={styles.subText}>
          Set your location to see who’s in your neighborhood or beyond. You won’t be able to match with people otherwise.
        </Text>

        {/* Icon in circle */}
        <View style={styles.iconContainer}>
          <Feather name="map-pin" size={40} color="#FF416C" />
        </View>
      </View>

      {/* Allow Button */}
      <TouchableOpacity style={styles.allowButton} onPress={handleAllowLocation}>
        <LinearGradient
          colors={['#FF416C', '#FF4B2B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.allowButtonGradient}
        >
          <Text style={styles.allowButtonText}>Allow</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Info */}
      <TouchableOpacity onPress={handleInfoPress} style={styles.infoContainer}>
        <Text style={styles.infoText}>How is my location used?</Text>
        <Feather name="chevron-down" size={18} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: '#eee',
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    width: '100%', // full progress (or adjust as needed)
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  subText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 60,
    lineHeight: 20,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  allowButton: {
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 40 : 20,
  },
  allowButtonGradient: {
    marginHorizontal: 20,
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  allowButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginRight: 5,
    fontWeight: '500',
  },
});
