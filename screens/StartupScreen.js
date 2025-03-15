import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function App() {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(1, {
      duration: 1500,
      easing: Easing.bounce,
    });
  
    const timeout = setTimeout(() => {
      navigation.replace('Signup');
    }, 3000);
  
    return () => clearTimeout(timeout);
  }, []);
  

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Animated.View style={[styles.logoContainer, animatedStyle]}>
        <Image
          source={require('./assets/athlink_logo.jpg')} // Make sure your logo is in the assets folder!
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <Text style={styles.tagline}>Swipe. Match. Play.</Text>

      <Text style={styles.footer}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1128',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  tagline: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    color: '#FCA311',
    fontSize: 16,
  },
});
