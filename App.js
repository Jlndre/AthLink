import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Screens
import StartupScreen from './screens/StartupScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import EmailScreen from './screens/EmailScreen';
import FirstNameScreen from './screens/FirstNameScreen';
import GenderScreen from './screens/GenderScreen';
import BirthdayScreen from './screens/BirthdayScreen';
import SportsInterestScreen from './screens/SportsInterestScreen';
import ExpertiseLevelScreen from './screens/ExpertiseLevelScreen.js';
import DistancePreferenceScreen from './screens/DistancePreferenceScreen.js';
import UploadProfilePhotoScreen from './screens/UploadProfilePhotoScreen.js';
import LocationPermissionScreen from './screens/LocationPermissionScreen.js';
import HomeScreen from './screens/HomeScreen.js';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Startup"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
              <Feather name="arrow-left" size={24} color="#333" />
            </TouchableOpacity>
          ),
        })}
      >

        {/* Startup */}
        <Stack.Screen
          name="Startup"
          component={StartupScreen}
          options={{ headerShown: false }}
        />

        {/* Signup */}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />

        {/* Email */}
        <Stack.Screen
          name="Email"
          component={EmailScreen}
          options={{ title: '' }}
        />

        {/* First Name */}
        <Stack.Screen
          name="FirstNameScreen"
          component={FirstNameScreen}
          options={{ title: '' }}
        />

        {/* Gender */}
        <Stack.Screen
          name="GenderScreen"
          component={GenderScreen}
          options={{ title: '' }}
        />

        {/* Birthday */}
        <Stack.Screen
          name="BirthdayScreen"
          component={BirthdayScreen}
          options={{ title: '' }}
        />

        {/* Sports Interest */}
        <Stack.Screen
          name="SportsInterestScreen"
          component={SportsInterestScreen}
          options={{ title: '' }}
        />

        {/* Expertise Level */}
        <Stack.Screen
          name="ExpertiseLevelScreen"
          component={ExpertiseLevelScreen}
          options={{ title: '' }}
        />

        <Stack.Screen
          name="LocationPermissionScreen"
          component={LocationPermissionScreen}
          options={{ title: '' }}
        />

        <Stack.Screen
          name="DistancePreferenceScreen"
          component={DistancePreferenceScreen}
          options={{ title: '' }}
      />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: '' }}
        />

        <Stack.Screen
          name="UploadProfilePhotoScreen"
          component={UploadProfilePhotoScreen}
          options={{ title: '' }}
        />

        {/* Login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
