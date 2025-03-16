import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function BirthdayScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { email, firstName, gender } = route.params || {};

  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [showPicker, setShowPicker] = useState(Platform.OS === 'ios');

  const handleNext = () => {
    if (!date) {
      alert('Please select your birthday');
      return;
    }

    navigation.navigate('SportsInterestScreen', {
      email,
      firstName,
      gender,
      birthday: date,
    });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);

    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
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

      <View style={styles.content}>
        <Text style={styles.heading}>What's your birthday?</Text>

        <TouchableOpacity
          onPress={() => setShowPicker(true)}
          activeOpacity={0.8}
          style={styles.dateDisplay}
        >
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </TouchableOpacity>

        <Text style={styles.subText}>
          This won’t be shown on your profile.{' '}
          <Text style={styles.boldText}>You can’t change it later.</Text>
        </Text>

        {showPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
            maximumDate={new Date()}
          />
        )}
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
    backgroundColor: '#FAFAFA', // White background
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#eee',
    width: '100%',
  },
  progressBar: {
    height: 4,
    width: '40%', // Slowed progress (this is step 4 of 5, for example)
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0A1128',
    marginBottom: 30,
    textAlign: 'center',
  },
  dateDisplay: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  dateText: {
    fontSize: 18,
    color: '#333',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
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
