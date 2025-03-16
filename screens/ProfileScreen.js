import React, { useState } from 'react';
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
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

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
    navigation.navigate('Startup');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <Feather name="settings" size={24} color="#0A1128" />
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
          {/* Edit Profile */}
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => navigation.navigate('EditProfileScreen')}
          >
            <Text style={styles.primaryButtonText}>Edit Profile</Text>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            style={[styles.button, styles.logoutButton]}
            onPress={handleLogout}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0A1128',
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
    borderWidth: 4,
    borderColor: '#1EA364',
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#1EA364',
    padding: 8,
    borderRadius: 20,
    shadowColor: '#1EA364',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0A1128',
    marginTop: 15,
  },
  sportLevel: {
    fontSize: 16,
    color: '#666',
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
    color: '#0A1128',
  },
  bioText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interestBadge: {
    backgroundColor: '#E8F5F1',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 5,
    borderWidth: 1,
    borderColor: '#1EA364',
  },
  interestText: {
    fontSize: 14,
    color: '#0A1128',
  },
  buttonWrapper: {
    width: '90%',
    marginTop: 40,
  },
  button: {
    height: 50,
    borderRadius: 30,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#1EA364',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#1EA364',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1EA364',
  },
});
