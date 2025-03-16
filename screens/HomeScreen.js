import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Get screen width for dynamic sizing
const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'Jordan Smith',
      age: 25,
      distance: '2 miles away',
      sport: 'Basketball',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a0',
    },
    {
      id: 2,
      name: 'Emily Johnson',
      age: 23,
      distance: '5 miles away',
      sport: 'Tennis',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    },
  ]);

  const onSwipeRight = (cardIndex) => {
    console.log('Swiped Right (Interested): ', cards[cardIndex].name);
  };

  const onSwipeLeft = (cardIndex) => {
    console.log('Swiped Left (Skipped): ', cards[cardIndex].name);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/athlink_logo.jpg')}
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon}>
            <Feather name="bell" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Feather name="sliders" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <MaterialIcons name="leaderboard" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Swiper */}
      <View style={styles.swiperContainer}>
        <Swiper
          cards={cards}
          renderCard={(card) => (
            <View style={styles.card}>
              <Image source={{ uri: card.image }} style={styles.cardImage} />
              <View style={styles.cardInfoContainer}>
                <Text style={styles.cardName}>{card.name}, {card.age}</Text>
                <Text style={styles.cardDetails}>{card.distance}</Text>
                <Text style={styles.cardDetails}>
                  {card.sport} • {card.level}
                </Text>
              </View>
            </View>
          )}
          onSwipedRight={onSwipeRight}
          onSwipedLeft={onSwipeLeft}
          backgroundColor="transparent"
          cardIndex={0}
          stackSize={3}
          disableBottomSwipe
          disableTopSwipe
        />
      </View>

      {/* Bottom Menu Bar */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuButton}>
          <Feather name="message-circle" size={26} color="#333" />
          <Text style={styles.menuLabel}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Feather name="users" size={26} color="#333" />
          <Text style={styles.menuLabel}>Community</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkButtonContainer}>
          <LinearGradient
            colors={['#FF416C', '#FF4B2B']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linkButton}
          >
            <Feather name="link" size={28} color="#FFF" />
          </LinearGradient>
          <Text style={styles.menuLabel}>Link</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton}>
          <Feather name="search" size={26} color="#333" />
          <Text style={styles.menuLabel}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Feather name="user" size={26} color="#333" />
          <Text style={styles.menuLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 15,
  },
  swiperContainer: {
    flex: 1,
    paddingBottom: 80, // Add space for bottom menu
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
    height: 500,
    width: width * 0.9,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '75%',
  },
  cardInfoContainer: {
    padding: 20,
  },
  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDetails: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
  },
  menuButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
  linkButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
