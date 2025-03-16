import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const sportsList = [
  'Basketball',
  'Football',
  'Tennis',
  'Swimming',
  'Running',
  'Volleyball',
  'Cricket',
  'Golf',
  'Cycling',
  'Table Tennis',
  'Martial Arts',
  'Baseball',
  'Rugby',
  'Hockey',
  'Badminton',
];

export default function SportsInterestScreen() {
  const navigation = useNavigation();
  const [selectedSports, setSelectedSports] = useState([]);

  const toggleSport = (sport) => {
    if (selectedSports.includes(sport)) {
      setSelectedSports(selectedSports.filter((item) => item !== sport));
    } else if (selectedSports.length < 3) {
      setSelectedSports([...selectedSports, sport]);
    }
  };

  const handleNext = () => {
    if (selectedSports.length === 0) {
      alert('Please select at least 1 sport');
      return;
    }

    navigation.navigate('ExpertiseLevelScreen', { email, firstName, gender, birthday: date, selectedSports });
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <LinearGradient
          colors={['#FF5F6D', '#FFC371']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.progressBar}
        />
      </View>

      {/* Title */}
      <View style={styles.content}>
        <Text style={styles.heading}>What sports are you interested in playing?</Text>
        <Text style={styles.subText}>Pick up to 3 sports</Text>

        {/* Sports List */}
        <FlatList
          data={sportsList}
          keyExtractor={(item) => item}
          numColumns={2}
          contentContainerStyle={styles.sportsContainer}
          renderItem={({ item }) => {
            const isSelected = selectedSports.includes(item);
            return (
              <TouchableOpacity
                style={[styles.sportItem, isSelected && styles.sportItemSelected]}
                onPress={() => toggleSport(item)}
              >
                <Text style={[styles.sportText, isSelected && styles.sportTextSelected]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Next Button */}
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={handleNext}
          disabled={selectedSports.length === 0}
        >
          <LinearGradient
            colors={selectedSports.length === 0 ? ['#ccc', '#ccc'] : ['#FF416C', '#FF4B2B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Next {selectedSports.length}/3</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  progressContainer: { height: 4, backgroundColor: '#eee', width: '100%' },
  progressBar: { height: 4, width: '80%', borderRadius: 2 },
  content: { flex: 1, paddingHorizontal: 20, paddingTop: 50 },
  heading: { fontSize: 28, fontWeight: '700', color: '#333', marginBottom: 10 },
  subText: { color: '#666', fontSize: 14, marginBottom: 20 },
  sportsContainer: { alignItems: 'center' },
  sportItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 8,
  },
  sportItemSelected: {
    borderColor: '#FF416C',
    backgroundColor: '#FF416C',
  },
  sportText: {
    color: '#333',
    fontSize: 16,
  },
  sportTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  nextButtonContainer: { paddingHorizontal: 20, paddingBottom: 30 },
  buttonWrapper: { width: '100%' },
  button: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: '600' },
});
