import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function UploadProfilePhotoScreen() {
  const navigation = useNavigation();
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Pick from gallery
  const pickImageFromGallery = async () => {
    setLoading(true);
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'We need access to your gallery to upload a photo.');
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // ✅ use MediaTypeOptions.Images
        quality: 1,
      });
  
      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Gallery error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const takePhotoWithCamera = async () => {
    setLoading(true);
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'We need access to your camera to take a photo.');
        return;
      }
  
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // ✅ use MediaTypeOptions.Images
        quality: 1,
      });
  
      if (!result.canceled) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Camera error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleNext = () => {
    if (!profileImage) {
      Alert.alert('Profile photo required', 'Please upload a profile photo before continuing.');
      return;
    }

    // Navigate to the DistancePreferenceScreen or any other next screen
    navigation.navigate('DistancePreferenceScreen', { profileImage });
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <LinearGradient
          colors={['#FF416C', '#FF4B2B']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.progressBar}
        />
      </View>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Upload a profile photo</Text>
      <Text style={styles.subTitle}>This helps players recognize you.</Text>

      {/* Profile Image Preview */}
      <TouchableOpacity onPress={pickImageFromGallery} style={styles.imageWrapper}>
        {loading ? (
          <ActivityIndicator size="large" color="#FF416C" />
        ) : profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.image} />
        ) : (
          <>
            <Feather name="camera" size={40} color="#FF416C" />
            <Text style={styles.addPhotoLabel}>Add Photo</Text>
          </>
        )}
      </TouchableOpacity>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={pickImageFromGallery} style={styles.actionButton}>
          <Feather name="image" size={20} color="#FF416C" />
          <Text style={styles.actionText}>Gallery</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={takePhotoWithCamera} style={styles.actionButton}>
          <Feather name="camera" size={20} color="#FF416C" />
          <Text style={styles.actionText}>Camera</Text>
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <View style={styles.nextButtonWrapper}>
        <TouchableOpacity
          style={[styles.nextButton, !profileImage && styles.nextButtonDisabled]}
          onPress={handleNext}
          disabled={!profileImage}
        >
          <LinearGradient
            colors={['#FF416C', '#FF4B2B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.nextButtonGradient}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#eee',
  },
  progressBar: {
    width: '85%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginTop: 40,
  },
  subTitle: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
    marginTop: 8,
  },
  imageWrapper: {
    marginTop: 50,
    alignSelf: 'center',
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#FF416C',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  addPhotoLabel: {
    marginTop: 10,
    color: '#FF416C',
    fontSize: 14,
  },
  actionsContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 60,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 8,
    color: '#FF416C',
    fontSize: 16,
  },
  nextButtonWrapper: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
  },
  nextButton: {
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
  },
  nextButtonGradient: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  nextButtonDisabled: {
    opacity: 0.4,
  },
});
