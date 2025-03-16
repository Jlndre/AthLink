import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const expertiseLevels = ['Beginner', 'Intermediate', 'Advanced'];

export default function ExpertiseLevelScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { email, firstName, gender, birthday: date, selectedSports } = route.params;

  const [expertise, setExpertise] = useState({});

  const setLevel = (sport, level) => {
    setExpertise({ ...expertise, [sport]: level });
  };

  const handleNext = () => {
    const notSet = selectedSports.find((sport) => !expertise[sport]);
    if (notSet) {
      alert(`Please set your expertise level for ${notSet}`);
      return;
    }

    console.log('Final Data:', expertise);

    navigation.navigate('DistancePreferenceScreen', {
      email,
      firstName,
      gender,
      birthday: date,
      selectedSports,
      expertise,
    });
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <LinearGradient
          colors={['#1EA364', '#1EA364']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.progressBar}
        />
      </View>

      {/* Title */}
      <View style={styles.content}>
        <Text style={styles.heading}>Select your level of expertise</Text>

        {/* Sports and levels */}
        <FlatList
          data={selectedSports}
          keyExtractor={(item) => item}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View style={styles.sportContainer}>
              <Text style={styles.sportName}>{item}</Text>

              <View style={styles.levelOptions}>
                {expertiseLevels.map((level) => {
                  const isSelected = expertise[item] === level;
                  return (
                    <TouchableOpacity
                      key={level}
                      style={[
                        styles.levelButton,
                        isSelected && styles.levelButtonSelected,
                      ]}
                      onPress={() => setLevel(item, level)}
                    >
                      <Text
                        style={[
                          styles.levelButtonText,
                          isSelected && styles.levelButtonTextSelected,
                        ]}
                      >
                        {level}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}
        />
      </View>

      {/* Next Button */}
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
    </View>
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
    width: '65%', // Full bar for last screen or adjust as per flow
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0A1128',
    marginBottom: 30,
    textAlign: 'center',
  },
  sportContainer: {
    marginBottom: 30,
  },
  sportName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  levelOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  levelButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
  },
  levelButtonSelected: {
    backgroundColor: '#1EA364',
    borderColor: '#1EA364',
  },
  levelButtonText: {
    color: '#333',
    fontSize: 14,
  },
  levelButtonTextSelected: {
    color: '#FFF',
    fontWeight: '600',
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
    fontWeight: '600',
  },
});
