import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Feather name="bell" size={24} color="#0A1128" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Feather name="sliders" size={24} color="#0A1128" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <MaterialIcons name="leaderboard" size={24} color="#0A1128" />
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
              <View style={styles.cardDetails}>
                <Text style={styles.cardName}>
                  {card.name}, {card.age}
                </Text>
                <Text style={styles.cardInfo}>{card.distance}</Text>
                <Text style={styles.cardInfo}>
                  {card.sport} • {card.level}
                </Text>
              </View>
            </View>
          )}
          onSwipedRight={onSwipeRight}
          onSwipedLeft={onSwipeLeft}
          cardIndex={0}
          backgroundColor="transparent"
          stackSize={3}
          disableBottomSwipe
          disableTopSwipe
        />
      </View>

      {/* Footer Menu */}
      <View style={styles.footerMenu}>
        {/* Chat */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatScreen')}
          style={styles.footerItem}
        >
          <Feather name="message-circle" size={24} color="#0A1128" />
          <Text style={styles.footerLabel}>Chat</Text>
        </TouchableOpacity>

        {/* Community */}
        <TouchableOpacity
          onPress={() => navigation.navigate('CommunityScreen')}
          style={styles.footerItem}
        >
          <Feather name="users" size={24} color="#0A1128" />
          <Text style={styles.footerLabel}>Community</Text>
        </TouchableOpacity>

        {/* Link (Home) */}
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={styles.linkButtonContainer}
        >
          <LinearGradient
            colors={['#1EA364', '#1EA364']}
            style={styles.linkButtonGradient}
          >
            <Feather name="link" size={28} color="#FFF" />
          </LinearGradient>
          <Text style={styles.footerLabel}>Link</Text>
        </TouchableOpacity>

        {/* Explore */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ExploreScreen')}
          style={styles.footerItem}
        >
          <Feather name="search" size={24} color="#0A1128" />
          <Text style={styles.footerLabel}>Explore</Text>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileScreen')}
          style={styles.footerItem}
        >
          <Feather name="user" size={24} color="#0A1128" />
          <Text style={styles.footerLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  iconBtn: {
    marginLeft: 15,
  },
  swiperContainer: {
    flex: 1,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    height: 500,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '75%',
  },
  cardDetails: {
    padding: 20,
  },
  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A1128',
  },
  cardInfo: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  footerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FAFAFA',
  },
  footerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerLabel: {
    fontSize: 12,
    color: '#0A1128',
    textAlign: 'center',
    marginTop: 5,
  },
  linkButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkButtonGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});