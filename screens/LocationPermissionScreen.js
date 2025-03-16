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

      let location = await Location.getCurrentPositionAsync({});
      console.log('User location:', location);

      navigation.navigate('HomeScreen');
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
          colors={['#1EA364', '#1EA364']}
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
          <Feather name="map-pin" size={40} color="#1EA364" />
        </View>
      </View>

      {/* Allow Button */}
      <TouchableOpacity style={styles.allowButton} onPress={handleAllowLocation}>
        <LinearGradient
          colors={['#1EA364', '#1EA364']}
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
        <Feather name="chevron-down" size={18} color="#0A1128" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  progressBarBackground: {
    height: 4,
    backgroundColor: '#eee',
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    width: '100%',
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
    color: '#0A1128',
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
    backgroundColor: '#E8F5F1', // Softer green-tinted background (optional)
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1EA364',
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
    color: '#FFFFFF',
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
    color: '#0A1128',
    marginRight: 5,
    fontWeight: '500',
  },
});
