import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  // Dummy user data (replace with Firebase data later)
  const [user, setUser] = useState({
    name: 'Jordan Smith',
    age: 25,
    distance: '2 miles away',
    sport: 'Basketball',
    level: 'Advanced',
    bio: 'Competitive player who loves weekend pick-up games!',
    interests: ['Basketball', 'Gym', 'Running'],
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a0',
  });

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out!');
    // TODO: Firebase sign out + navigate to Startup/Login screen
    navigation.navigate('Startup');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <Feather name="settings" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Image */}
        <View style={styles.profilePicWrapper}>
          <Image source={{ uri: user.image }} style={styles.profilePic} />
          <TouchableOpacity style={styles.editIcon}>
            <Feather name="camera" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Name, Age, Sport */}
        <Text style={styles.name}>{user.name}, {user.age}</Text>
        <Text style={styles.sportLevel}>{user.sport} • {user.level}</Text>
        <Text style={styles.distance}>{user.distance}</Text>

        {/* Bio */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bioText}>{user.bio}</Text>
        </View>

        {/* Interests */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <View style={styles.interestsContainer}>
            {user.interests.map((interest, index) => (
              <View key={index} style={styles.interestBadge}>
                <Text style={styles.interestText}>{interest}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('EditProfileScreen')}
          >
            <LinearGradient
              colors={['#FF416C', '#FF4B2B']}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Edit Profile</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#eee' }]}
            onPress={handleLogout}
          >
            <Text style={[styles.buttonText, { color: '#FF4B2B' }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  profilePicWrapper: {
    position: 'relative',
    marginTop: 20,
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#FF416C',
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#FF416C',
    padding: 8,
    borderRadius: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginTop: 15,
  },
  sportLevel: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
  distance: {
    fontSize: 14,
    color: '#999',
    marginTop: 4,
  },
  section: {
    width: '90%',
    marginTop: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  bioText: {
    fontSize: 14,
    color: '#777',
    lineHeight: 20,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interestBadge: {
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 5,
    borderWidth: 1,
    borderColor: '#eee',
  },
  interestText: {
    fontSize: 14,
    color: '#333',
  },
  buttonWrapper: {
    width: '90%',
    marginTop: 40,
  },
  button: {
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 15,
    justifyContent: 'center',
  },
  buttonGradient: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
});
