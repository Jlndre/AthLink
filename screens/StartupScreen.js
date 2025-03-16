import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ActivityIndicator, Dimensions } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

// Get screen dimensions for responsive sizing
const { width, height } = Dimensions.get('window');

export default function StartupScreen({ navigation }) {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(1, {
      duration: 1200,
      easing: Easing.out(Easing.exp),
    });

    const timeout = setTimeout(() => {
      navigation.replace('Signup');
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <LinearGradient
      colors={['#0A1128', '#1EA364']}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Image
          source={require('../assets/athlink_logo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: width * 2, // 80% of screen width for a bigger logo
    height: width * 2, // keep it square
    marginBottom: 50, // more space before the tagline
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  loader: {
    position: 'absolute',
    bottom: 50,
  },
});
